#!/usr/bin/env python3
"""Parse Similarweb raw data into structured competitive analysis."""

import json
import csv

with open('/home/ubuntu/data/similarweb_raw.json', 'r') as f:
    data = json.load(f)

results = []

for domain, info in data.items():
    row = {"domain": domain}
    
    # Parse visits
    visits_data = info.get('visits', {})
    if 'error' not in str(visits_data):
        visits_list = visits_data.get('visits', [])
        if visits_list:
            monthly = [v['visits'] for v in visits_list if isinstance(v, dict)]
            row['avg_monthly_visits'] = int(sum(monthly) / len(monthly)) if monthly else 0
            row['latest_visits'] = int(monthly[-1]) if monthly else 0
            row['visits_trend'] = monthly
        else:
            row['avg_monthly_visits'] = 0
            row['latest_visits'] = 0
            row['visits_trend'] = []
    else:
        row['avg_monthly_visits'] = 0
        row['latest_visits'] = 0
        row['visits_trend'] = []
    
    # Parse rank
    rank_data = info.get('rank', {})
    if 'error' not in str(rank_data):
        rank_list = rank_data.get('global_rank', [])
        if rank_list and isinstance(rank_list, list):
            row['global_rank'] = rank_list[-1].get('global_rank', 0)
        else:
            row['global_rank'] = 0
    else:
        row['global_rank'] = 0
    
    # Parse bounce rate
    bounce_data = info.get('bounce_rate', {})
    if 'error' not in str(bounce_data):
        bounce_list = bounce_data.get('bounce_rate', [])
        if bounce_list and isinstance(bounce_list, list):
            rates = [b['bounce_rate'] for b in bounce_list if isinstance(b, dict) and b.get('bounce_rate') is not None]
            row['avg_bounce_rate'] = round(sum(rates) / len(rates) * 100, 1) if rates else 0
        else:
            row['avg_bounce_rate'] = 0
    else:
        row['avg_bounce_rate'] = 0
    
    # Parse traffic sources
    ts_data = info.get('traffic_sources_desktop', {})
    if 'error' not in str(ts_data):
        visits_by_source = ts_data.get('visits', {}).get(domain, [])
        source_totals = {}
        for source in visits_by_source:
            source_type = source.get('source_type', 'Unknown')
            visits_list = source.get('visits', [])
            total = sum(v.get('visits', 0) for v in visits_list if isinstance(v, dict))
            source_totals[source_type] = total
        
        grand_total = sum(source_totals.values())
        if grand_total > 0:
            row['pct_search'] = round(source_totals.get('Search', 0) / grand_total * 100, 1)
            row['pct_direct'] = round(source_totals.get('Direct', 0) / grand_total * 100, 1)
            row['pct_social'] = round(source_totals.get('Social', 0) / grand_total * 100, 1)
            row['pct_display'] = round(source_totals.get('Display Ads', 0) / grand_total * 100, 1)
            row['pct_referral'] = round(source_totals.get('Referrals', 0) / grand_total * 100, 1)
            row['pct_email'] = round(source_totals.get('Email', 0) / grand_total * 100, 1)
            row['pct_paid_search'] = round(source_totals.get('Paid Search', 0) / grand_total * 100, 1)
        else:
            row['pct_search'] = 0
            row['pct_direct'] = 0
            row['pct_social'] = 0
            row['pct_display'] = 0
            row['pct_referral'] = 0
            row['pct_email'] = 0
            row['pct_paid_search'] = 0
    else:
        row['pct_search'] = 0
        row['pct_direct'] = 0
        row['pct_social'] = 0
        row['pct_display'] = 0
        row['pct_referral'] = 0
        row['pct_email'] = 0
        row['pct_paid_search'] = 0
    
    results.append(row)

# Sort by average monthly visits descending
results.sort(key=lambda x: x['avg_monthly_visits'], reverse=True)

# Print summary table
print(f"\n{'Domain':<25} {'Avg Monthly Visits':>18} {'Latest Visits':>14} {'Global Rank':>12} {'Bounce%':>8} {'Search%':>8} {'Direct%':>8} {'Social%':>8} {'Display%':>9} {'Email%':>7}")
print("-" * 140)
for r in results:
    print(f"{r['domain']:<25} {r['avg_monthly_visits']:>18,} {r['latest_visits']:>14,} {r['global_rank']:>12,} {r['avg_bounce_rate']:>7.1f}% {r['pct_search']:>7.1f}% {r['pct_direct']:>7.1f}% {r['pct_social']:>7.1f}% {r['pct_display']:>8.1f}% {r['pct_email']:>6.1f}%")

# Save to CSV
with open('/home/ubuntu/data/similarweb_summary.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['domain', 'avg_monthly_visits', 'latest_visits', 'global_rank', 'avg_bounce_rate', 'pct_search', 'pct_direct', 'pct_social', 'pct_display', 'pct_referral', 'pct_email'])
    writer.writeheader()
    for r in results:
        writer.writerow({k: v for k, v in r.items() if k != 'visits_trend' and k != 'pct_paid_search'})

# Save detailed JSON
with open('/home/ubuntu/data/similarweb_parsed.json', 'w') as f:
    json.dump(results, f, indent=2, default=str)

print(f"\n\nData saved to /home/ubuntu/data/similarweb_summary.csv")

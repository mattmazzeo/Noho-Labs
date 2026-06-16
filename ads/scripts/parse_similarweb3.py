#!/usr/bin/env python3
"""Parse Similarweb raw data into structured competitive analysis - corrected."""

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
        else:
            row['avg_monthly_visits'] = 0
            row['latest_visits'] = 0
    else:
        row['avg_monthly_visits'] = 0
        row['latest_visits'] = 0
    
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
    
    # Parse traffic sources (desktop) - correct structure
    ts_data = info.get('traffic_sources_desktop', {})
    if 'error' not in str(ts_data):
        visits_by_source = ts_data.get('visits', {}).get(domain, [])
        source_totals = {}
        for source in visits_by_source:
            source_type = source.get('source_type', 'Unknown')
            visits_list = source.get('visits', [])
            # Sum organic + paid for each source
            total = 0
            for v in visits_list:
                if isinstance(v, dict):
                    total += v.get('organic', 0) + v.get('paid', 0)
            source_totals[source_type] = total
        
        grand_total = sum(source_totals.values())
        if grand_total > 0:
            row['pct_search'] = round(source_totals.get('Search', 0) / grand_total * 100, 1)
            row['pct_direct'] = round(source_totals.get('Direct', 0) / grand_total * 100, 1)
            row['pct_social'] = round(source_totals.get('Social', 0) / grand_total * 100, 1)
            row['pct_display'] = round(source_totals.get('Display Ads', 0) / grand_total * 100, 1)
            row['pct_referral'] = round(source_totals.get('Referrals', 0) / grand_total * 100, 1)
            row['pct_email'] = round(source_totals.get('Mail', 0) / grand_total * 100, 1)
            
            # Also calculate paid vs organic search split
            search_visits = visits_by_source
            search_source = [s for s in visits_by_source if s.get('source_type') == 'Search']
            if search_source:
                search_organic = sum(v.get('organic', 0) for v in search_source[0].get('visits', []))
                search_paid = sum(v.get('paid', 0) for v in search_source[0].get('visits', []))
                search_total = search_organic + search_paid
                row['pct_organic_search'] = round(search_organic / grand_total * 100, 1)
                row['pct_paid_search'] = round(search_paid / grand_total * 100, 1)
            else:
                row['pct_organic_search'] = 0
                row['pct_paid_search'] = 0
        else:
            row['pct_search'] = 0
            row['pct_direct'] = 0
            row['pct_social'] = 0
            row['pct_display'] = 0
            row['pct_referral'] = 0
            row['pct_email'] = 0
            row['pct_organic_search'] = 0
            row['pct_paid_search'] = 0
    else:
        row['pct_search'] = 0
        row['pct_direct'] = 0
        row['pct_social'] = 0
        row['pct_display'] = 0
        row['pct_referral'] = 0
        row['pct_email'] = 0
        row['pct_organic_search'] = 0
        row['pct_paid_search'] = 0
    
    results.append(row)

# Sort by average monthly visits descending
results.sort(key=lambda x: x['avg_monthly_visits'], reverse=True)

# Print summary table
print(f"\n{'Domain':<25} {'Avg Mo. Visits':>15} {'Global Rank':>12} {'Bounce%':>8} {'Organic':>8} {'Paid Srch':>10} {'Direct%':>8} {'Social%':>8} {'Display%':>9} {'Referral%':>10} {'Email%':>7}")
print("-" * 145)
for r in results:
    print(f"{r['domain']:<25} {r['avg_monthly_visits']:>15,} {r['global_rank']:>12,} {r['avg_bounce_rate']:>7.1f}% {r.get('pct_organic_search',0):>7.1f}% {r.get('pct_paid_search',0):>9.1f}% {r['pct_direct']:>7.1f}% {r['pct_social']:>7.1f}% {r['pct_display']:>8.1f}% {r['pct_referral']:>9.1f}% {r['pct_email']:>6.1f}%")

# Save to file
with open('/home/ubuntu/data/traffic_analysis.md', 'w') as f:
    f.write("# Similarweb Traffic Analysis - Peptide & Longevity Competitors\n")
    f.write(f"## Data Period: Dec 2025 - May 2026\n\n")
    f.write("| Domain | Avg Monthly Visits | Global Rank | Bounce Rate | Organic Search | Paid Search | Direct | Social | Display | Referral | Email |\n")
    f.write("|---|---|---|---|---|---|---|---|---|---|---|\n")
    for r in results:
        f.write(f"| {r['domain']} | {r['avg_monthly_visits']:,} | #{r['global_rank']:,} | {r['avg_bounce_rate']:.1f}% | {r.get('pct_organic_search',0):.1f}% | {r.get('pct_paid_search',0):.1f}% | {r['pct_direct']:.1f}% | {r['pct_social']:.1f}% | {r['pct_display']:.1f}% | {r['pct_referral']:.1f}% | {r['pct_email']:.1f}% |\n")
    
    f.write("\n\n## Key Insights:\n\n")
    f.write("### Traffic Volume Tiers:\n")
    f.write("- **Tier 1 (>1M visits/mo):** Hims (7.8M), Ro (7.3M), Kind Patches (2.3M)\n")
    f.write("- **Tier 2 (100K-1M):** Cymbiotika (926K), Peptide Sciences (608K), AgelessRx (525K), Swiss Chems (363K), Rho Nutrition (332K)\n")
    f.write("- **Tier 3 (10K-100K):** OpenLoop Health (111K), Defy Medical (62K), Magnali (17K), Evolve Telemed (16K)\n")
    f.write("- **Tier 4 (<10K):** Paradigm Peptides (6K), Noho Labs (3K), Aluna Science (0)\n")

print("\n\nSaved to /home/ubuntu/data/traffic_analysis.md")

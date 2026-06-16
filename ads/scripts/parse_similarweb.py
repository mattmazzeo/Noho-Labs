#!/usr/bin/env python3
"""Parse Similarweb raw data into a structured summary."""

import json

with open('/home/ubuntu/data/similarweb_raw.json', 'r') as f:
    data = json.load(f)

print("=" * 100)
print("SIMILARWEB COMPETITIVE TRAFFIC ANALYSIS")
print("=" * 100)

# Parse and display results
summary = []
for domain, info in data.items():
    row = {"domain": domain}
    
    # Parse visits
    visits_data = info.get('visits', {})
    if 'error' not in visits_data and visits_data:
        monthly_visits = []
        if isinstance(visits_data, list):
            for entry in visits_data:
                if 'visits' in entry:
                    monthly_visits.append(entry['visits'])
        elif isinstance(visits_data, dict):
            if 'visits' in visits_data:
                monthly_visits = [visits_data['visits']]
            elif 'data' in visits_data:
                for entry in visits_data.get('data', []):
                    if 'visits' in entry:
                        monthly_visits.append(entry['visits'])
        row['avg_monthly_visits'] = sum(monthly_visits) / len(monthly_visits) if monthly_visits else 'N/A'
        row['latest_visits'] = monthly_visits[-1] if monthly_visits else 'N/A'
    else:
        row['avg_monthly_visits'] = 'N/A'
        row['latest_visits'] = 'N/A'
    
    # Parse rank
    rank_data = info.get('rank', {})
    if 'error' not in rank_data and rank_data:
        if isinstance(rank_data, list):
            row['global_rank'] = rank_data[-1].get('global_rank', 'N/A') if rank_data else 'N/A'
        elif isinstance(rank_data, dict):
            row['global_rank'] = rank_data.get('global_rank', 'N/A')
    else:
        row['global_rank'] = 'N/A'
    
    # Parse bounce rate
    bounce_data = info.get('bounce_rate', {})
    if 'error' not in bounce_data and bounce_data:
        bounce_rates = []
        if isinstance(bounce_data, list):
            for entry in bounce_data:
                if 'bounce_rate' in entry:
                    bounce_rates.append(entry['bounce_rate'])
        elif isinstance(bounce_data, dict):
            if 'bounce_rate' in bounce_data:
                bounce_rates = [bounce_data['bounce_rate']]
        row['avg_bounce_rate'] = sum(bounce_rates) / len(bounce_rates) if bounce_rates else 'N/A'
    else:
        row['avg_bounce_rate'] = 'N/A'
    
    # Parse traffic sources
    ts_data = info.get('traffic_sources_desktop', {})
    if 'error' not in ts_data and ts_data:
        row['traffic_sources'] = ts_data
    else:
        row['traffic_sources'] = 'N/A'
    
    summary.append(row)

# Print raw data structure for first domain to understand format
print("\n\nRAW DATA STRUCTURE (first domain):")
first_domain = list(data.keys())[0]
print(f"\nDomain: {first_domain}")
print(f"Visits keys: {type(data[first_domain].get('visits', {}))}")
print(f"Visits data: {json.dumps(data[first_domain].get('visits', {}), indent=2, default=str)[:2000]}")
print(f"\nRank data: {json.dumps(data[first_domain].get('rank', {}), indent=2, default=str)[:1000]}")
print(f"\nBounce data: {json.dumps(data[first_domain].get('bounce_rate', {}), indent=2, default=str)[:1000]}")
print(f"\nTraffic sources: {json.dumps(data[first_domain].get('traffic_sources_desktop', {}), indent=2, default=str)[:2000]}")

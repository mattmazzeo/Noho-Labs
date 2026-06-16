#!/usr/bin/env python3
"""Collect Similarweb traffic data for all peptide/longevity competitors."""

import sys
sys.path.append('/opt/.manus/.sandbox-runtime')
from data_api import ApiClient
from datetime import datetime
from dateutil.relativedelta import relativedelta
import json
import os

# Ensure output directory exists
os.makedirs('/home/ubuntu/data', exist_ok=True)

COMPETITORS = [
    "rhonutrition.com",
    "cymbiotika.com",
    "hims.com",
    "ro.co",
    "magnali.com",
    "kindpatches.com",
    "agelessrx.com",
    "defymedical.com",
    "peptidesciences.com",
    "noholabs.com",
    "alunascience.com",
    "openloophealth.com",
    "evolvetelemed.com",
    "swisschems.is",
    "paradigmpeptides.com",
]

client = ApiClient()
last_complete_month = datetime.now().replace(day=1) - relativedelta(months=1)
start_date = (last_complete_month - relativedelta(months=5)).strftime("%Y-%m")
end_date = last_complete_month.strftime("%Y-%m")

results = {}

for domain in COMPETITORS:
    print(f"Processing: {domain}")
    domain_data = {"domain": domain}
    
    # Get total visits
    try:
        visits = client.call_api(
            'SimilarWeb/get_visits_total',
            path_params={'domain': domain},
            query={
                'country': 'world',
                'granularity': 'monthly',
                'main_domain_only': False,
                'start_date': start_date,
                'end_date': end_date
            }
        )
        domain_data['visits'] = visits
    except Exception as e:
        domain_data['visits'] = {'error': str(e)}
    
    # Get global rank
    try:
        rank = client.call_api(
            'SimilarWeb/get_global_rank',
            path_params={'domain': domain},
            query={
                'main_domain_only': False,
                'start_date': start_date,
                'end_date': end_date
            }
        )
        domain_data['rank'] = rank
    except Exception as e:
        domain_data['rank'] = {'error': str(e)}
    
    # Get bounce rate
    try:
        bounce = client.call_api(
            'SimilarWeb/get_bounce_rate',
            path_params={'domain': domain},
            query={
                'country': 'world',
                'granularity': 'monthly',
                'main_domain_only': False,
                'start_date': start_date,
                'end_date': end_date
            }
        )
        domain_data['bounce_rate'] = bounce
    except Exception as e:
        domain_data['bounce_rate'] = {'error': str(e)}
    
    # Get desktop traffic sources
    try:
        traffic_sources = client.call_api(
            'SimilarWeb/get_traffic_sources_desktop',
            path_params={'domain': domain},
            query={
                'country': 'world',
                'granularity': 'monthly',
                'main_domain_only': False,
                'start_date': start_date,
                'end_date': end_date
            }
        )
        domain_data['traffic_sources_desktop'] = traffic_sources
    except Exception as e:
        domain_data['traffic_sources_desktop'] = {'error': str(e)}
    
    results[domain] = domain_data
    
    # Save incrementally to prevent data loss
    with open('/home/ubuntu/data/similarweb_raw.json', 'w') as f:
        json.dump(results, f, indent=2, default=str)

print(f"\nCompleted data collection for {len(results)} domains.")
print(f"Data saved to /home/ubuntu/data/similarweb_raw.json")

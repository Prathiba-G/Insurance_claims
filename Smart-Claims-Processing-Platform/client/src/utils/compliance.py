import json

def check_exclusions(claim_data, rules_path="policy_rules.json"):
    with open(rules_path) as f:
        rules = json.load(f)
    # Apply rules logic here
    return True  # or False

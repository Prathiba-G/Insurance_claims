def route_claim(claim_type, priority):
    if claim_type == "Health" and priority == "High":
        return "MedicalReviewTeam"
    return "GeneralQueue"

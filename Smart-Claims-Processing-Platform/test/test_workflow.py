from utils.ocr import extract_text_from_image
from utils.classifier import classify_claim
from utils.router import route_claim
from utils.compliance import check_exclusions

def test_claim_workflow(image_path, claim_data):
    print(f"\n📄 Processing document: {image_path}")

    # Step 1: OCR
    extracted_text = extract_text_from_image(image_path)
    print(f"🧠 Extracted Text:\n{extracted_text[:300]}...\n")

    # Step 2: Classification
    claim_type = classify_claim(extracted_text)
    print(f"🔍 Predicted Claim Type: {claim_type}")

    # Step 3: Routing
    priority = claim_data.get("priority", "Medium")
    routing_team = route_claim(claim_type, priority)
    print(f"🚚 Routed to: {routing_team}")

    # Step 4: Compliance Check
    is_compliant = check_exclusions(claim_data)
    print(f"✅ Compliance Status: {'Passed' if is_compliant else 'Violated'}")

# Example usage
if __name__ == "__main__":
    sample_claim = {
        "claimId": "C002",
        "claimType": "Auto",
        "priority": "High",
        "claimantName": "Priya Verma",
        "description": "Rear-end collision damage",
        "amount": 12000
    }

    test_claim_workflow("data/sample_claims/claim002_auto.jpg", sample_claim)

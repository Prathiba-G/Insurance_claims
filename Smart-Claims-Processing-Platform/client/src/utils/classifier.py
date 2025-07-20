def classify_claim(text):
    if "hospital" in text.lower():
        return "Health"
    elif "vehicle" in text.lower():
        return "Auto"
    else:
        return "General"

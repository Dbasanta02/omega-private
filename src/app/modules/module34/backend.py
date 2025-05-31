# backend.py – Omega Regulatory Alert System (Module 34)

import datetime
import json

class RegulatoryAlertSystem:
    def __init__(self):
        self.rules = {
            "SEC_Reporting": True,
            "Crypto_Ban_Watch": True,
            "Leverage_Limit_Check": True
        }
        self.alert_log = []

    def scan_event(self, news_event: dict):
        if "SEC" in news_event.get("tags", []):
            self._trigger_alert("SEC_Reporting", news_event)
        if "crypto ban" in news_event.get("headline", "").lower():
            self._trigger_alert("Crypto_Ban_Watch", news_event)
        if "leverage limit" in news_event.get("content", "").lower():
            self._trigger_alert("Leverage_Limit_Check", news_event)

    def _trigger_alert(self, rule, event):
        alert = {
            "timestamp": datetime.datetime.utcnow().isoformat(),
            "rule": rule,
            "event": event
        }
        self.alert_log.append(alert)
        print(f"[⚠️ ALERT] {rule} triggered due to event: {event.get('headline')}")

    def export_log(self):
        with open("regulatory_alerts.json", "w") as f:
            json.dump(self.alert_log, f, indent=4)

# Example test
if __name__ == "__main__":
    alert_engine = RegulatoryAlertSystem()
    sample_event = {
        "headline": "SEC imposes new reporting deadline",
        "tags": ["SEC", "compliance"],
        "content": "New regulations will apply to crypto firms using leverage."
    }
    alert_engine.scan_event(sample_event)
    alert_engine.export_log()

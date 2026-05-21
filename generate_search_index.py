"""
Generate search-index.js by loading each page in a headless browser and extracting
text per section (elements with id attributes inside <main>).

Developed By: Suyog Shaha
Usage:
  1. Start the dev server:  npm run dev
  2. Run this script:       python generate_search_index.py

Requirements: pip install playwright && playwright install chromium
"""

import re
import os
import sys
import json

# ── Config ──────────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(SCRIPT_DIR, "src")
APP_JSX = os.path.join(SRC_DIR, "App.jsx")
OUTPUT_FILE = os.path.join(SRC_DIR, "assets", "search-index.js")

DEV_SERVER_URL = "http://localhost:5173"

# Routes to skip (no searchable content)
EXCLUDE_PATHS = {"*"}

# ── URL Titles & Breadcrumbs ───────────────────────────────────────────────
# Canonical title + breadcrumb per URL for display in search results.
# Update this when adding new pages.

URL_TITLES = {
    "/":                                        {"title": "Home",                                                       "crumb": ""},
    "/fundamentals_of_qii":                     {"title": "Fundamentals of QII",                                        "crumb": ""},
    "/qii1":                                    {"title": "QII.1 Sustainable Growth",                                   "crumb": ""},
    "/qii2":                                    {"title": "QII.2 Economic Efficiency",                                  "crumb": ""},
    "/qii3":                                    {"title": "QII.3 Environment",                                          "crumb": ""},
    "/qii4":                                    {"title": "QII.4 Resilience",                                           "crumb": ""},
    "/qii5":                                    {"title": "QII.5 Inclusion",                                            "crumb": ""},
    "/qii6":                                    {"title": "QII.6 Governance",                                           "crumb": ""},
    "/technicalsolutions":                      {"title": "Technical Solutions",                                         "crumb": "QII.2 Economic Efficiency"},
    "/costrecovery":                            {"title": "Cost-recovery",                                              "crumb": "QII.2 Economic Efficiency"},
    "/procurement":                             {"title": "Procurement",                                                "crumb": "QII.2 Economic Efficiency"},
    "/governance":                              {"title": "Governance",                                                 "crumb": "QII.2 Economic Efficiency"},
    "/DecarbonizingInfrastructure":              {"title": "Decarbonizing Infrastructure",                               "crumb": "QII.3 Environment"},
    "/QualityEnvironmentalStandards":            {"title": "Quality Environmental Standards",                            "crumb": "QII.3 Environment"},
    "/GreenDesigns&Nature-BasedInfrastructure":  {"title": "Green Designs and Nature-Based Infrastructure",              "crumb": "QII.3 Environment"},
    "/GreenFinancingforInfrastructure":          {"title": "Green Financing",                                            "crumb": "QII.3 Environment"},
    "/Diagnosing-vulnerabilities":               {"title": "Diagnosing Vulnerabilities",                                 "crumb": "QII.4 Resilience"},
    "/Resilient-design&operation":               {"title": "Resilient Design and Operation",                             "crumb": "QII.4 Resilience"},
    "/Financing-resilience":                     {"title": "Financing Resilience",                                       "crumb": "QII.4 Resilience"},
    "/Managing-cyber-security-risks":            {"title": "Managing Cybersecurity Risks",                               "crumb": "QII.4 Resilience"},
    "/Policies_Standards_Regulation":            {"title": "Inclusion through Policies, Standards and Regulation",       "crumb": "QII.5 Inclusion"},
    "/Project_Planning_And_Design":              {"title": "Inclusion in Project Design",                                "crumb": "QII.5 Inclusion"},
    "/Stakeholder_Engagement":                   {"title": "Inclusive Stakeholder Engagement",                            "crumb": "QII.5 Inclusion"},
    "/Infrastructure-Institutions":              {"title": "Infrastructure Institutions",                                "crumb": "QII.6 Governance"},
    "/govtech-for-infrastructure":               {"title": "GovTech for Infrastructure",                                 "crumb": "QII.6 Governance"},
    "/Public-Investment-And-Asset-Management":   {"title": "Public Investment and Asset Management",                     "crumb": "QII.6 Governance"},
    "/qii2casestudy1":                           {"title": "Fukuoka City: Life Cycle Costing for Water Management",      "crumb": "QII.2 \u00b7 Case Study"},
    "/qii2casestudy2":                           {"title": "India: Ganga River Wastewater Program",                      "crumb": "QII.2 \u00b7 Case Study"},
    "/qii3casestudy1":                           {"title": "Colombia: Vida Manglar Carbon Project",                      "crumb": "QII.3 \u00b7 Case Study"},
    "/qii3casestudy2":                           {"title": "South Africa: Cape Town Green Bond",                         "crumb": "QII.3 \u00b7 Case Study"},
    "/qii4casestudy1":                           {"title": "Japan: Shibaura Wastewater Treatment Facility",              "crumb": "QII.4 \u00b7 Case Study"},
    "/qii4casestudy2":                           {"title": "Cabo Verde: Diagnosing Road Network Vulnerabilities",        "crumb": "QII.4 \u00b7 Case Study"},
    "/qii4casestudy3":                           {"title": "Philippines: Geospatial Information Management Portal",      "crumb": "QII.4 \u00b7 Case Study"},
    "/qii4casestudy4":                           {"title": "Solomon Islands: Modular Bridges for Resilient Transport",   "crumb": "QII.4 \u00b7 Case Study"},
    "/qii5casestudy1":                           {"title": "Albania: Gender Equality in Access to Economic Opportunities","crumb": "QII.5 \u00b7 Case Study"},
    "/qii5casestudy2":                           {"title": "Vietnam and Senegal: Universal Accessibility in Infrastructure","crumb": "QII.5 \u00b7 Case Study"},
    "/qii6casestudy1":                           {"title": "Central Asia: PPP Reforms",                                  "crumb": "QII.6 \u00b7 Case Study"},
    "/qii6casestudy2":                           {"title": "Albania: Innovations for Inclusive Public Services",         "crumb": "QII.6 \u00b7 Case Study"},
    "/site-map":                                 {"title": "Site Map",                                                   "crumb": ""},
    "/contact-us":                               {"title": "Contact Us",                                                 "crumb": ""},
}

# Map QII principle label per URL prefix
QII_MAP = {
    "/qii1": "QII.1 Sustainable Growth",
    "/qii2": "QII.2 Economic Efficiency",
    "/qii3": "QII.3 Environment",
    "/qii4": "QII.4 Resilience",
    "/qii5": "QII.5 Inclusion",
    "/qii6": "QII.6 Governance",
    "/technicalsolutions": "QII.2 Economic Efficiency",
    "/costrecovery": "QII.2 Economic Efficiency",
    "/procurement": "QII.2 Economic Efficiency",
    "/governance": "QII.2 Economic Efficiency",
    "/DecarbonizingInfrastructure": "QII.3 Environment",
    "/QualityEnvironmentalStandards": "QII.3 Environment",
    "/GreenDesigns&Nature-BasedInfrastructure": "QII.3 Environment",
    "/GreenFinancingforInfrastructure": "QII.3 Environment",
    "/Diagnosing-vulnerabilities": "QII.4 Resilience",
    "/Resilient-design&operation": "QII.4 Resilience",
    "/Financing-resilience": "QII.4 Resilience",
    "/Managing-cyber-security-risks": "QII.4 Resilience",
    "/Policies_Standards_Regulation": "QII.5 Inclusion",
    "/Project_Planning_And_Design": "QII.5 Inclusion",
    "/Stakeholder_Engagement": "QII.5 Inclusion",
    "/Infrastructure-Institutions": "QII.6 Governance",
    "/govtech-for-infrastructure": "QII.6 Governance",
    "/Public-Investment-And-Asset-Management": "QII.6 Governance",
}

# Sub-page (ip) label per URL
IP_MAP = {
    "/technicalsolutions": "Technical Solutions",
    "/costrecovery": "Cost Recovery",
    "/procurement": "Procurement",
    "/governance": "Governance",
    "/DecarbonizingInfrastructure": "Decarbonizing Infrastructure",
    "/QualityEnvironmentalStandards": "Quality Environmental Standards",
    "/GreenDesigns&Nature-BasedInfrastructure": "Green Designs & Nature-Based Infrastructure",
    "/GreenFinancingforInfrastructure": "Green Financing",
    "/Diagnosing-vulnerabilities": "Diagnosing Vulnerabilities",
    "/Resilient-design&operation": "Resilient Design & Operation",
    "/Financing-resilience": "Financing Resilience",
    "/Managing-cyber-security-risks": "Managing Cybersecurity Risks",
    "/Policies_Standards_Regulation": "Policies, Standards & Regulation",
    "/Project_Planning_And_Design": "Project Planning & Design",
    "/Stakeholder_Engagement": "Stakeholder Engagement",
    "/Infrastructure-Institutions": "Infrastructure Institutions",
    "/govtech-for-infrastructure": "GovTech for Infrastructure",
    "/Public-Investment-And-Asset-Management": "Public Investment & Asset Management",
}


# ── Route Parsing ───────────────────────────────────────────────────────────

def parse_app_routes():
    """Parse App.jsx to find all route paths."""
    with open(APP_JSX, "r", encoding="utf-8") as f:
        content = f.read()

    routes = ["/"]  # Index route (Home)

    for m in re.finditer(r'path:\s*"([^"]*)"', content):
        path = m.group(1)
        if path not in EXCLUDE_PATHS and path != "/":
            routes.append(path)

    return routes


# ── Browser-based Section Extraction ──────────────────────────────────────

def extract_all_pages(routes):
    """Visit each route in headless browser and extract text per section."""
    from playwright.sync_api import sync_playwright

    entries = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for url in routes:
            full_url = f"{DEV_SERVER_URL}/#{url}"
            try:
                page.goto(full_url, wait_until="networkidle", timeout=15000)
                page.wait_for_selector("main", timeout=5000)
                page.wait_for_timeout(800)

                # Extract sections: find all elements with id inside <main>
                sections = page.evaluate("""() => {
                    const main = document.querySelector('main');
                    if (!main) return [];
                    const results = [];
                    // Get all elements with an id attribute inside main
                    const elements = main.querySelectorAll('[id]');
                    if (elements.length === 0) {
                        // Fallback: use entire main content as one section
                        const text = main.innerText || '';
                        if (text.trim()) {
                            results.push({ secId: '', text: text });
                        }
                        return results;
                    }
                    elements.forEach(el => {
                        const text = el.innerText || '';
                        if (text.trim().length > 10) {
                            results.push({ secId: el.id, text: text });
                        }
                    });
                    // If no sections had content, fallback to full main
                    if (results.length === 0) {
                        const text = main.innerText || '';
                        if (text.trim()) {
                            results.push({ secId: '', text: text });
                        }
                    }
                    return results;
                }""")

                qii = QII_MAP.get(url, "")
                ip = IP_MAP.get(url, "")
                title_info = URL_TITLES.get(url, {})
                title = title_info.get("title", "")

                for sec in sections:
                    text = sec["text"]
                    sec_id = sec["secId"]

                    # Clean up text
                    text = text.replace('\u200b', '').replace('\u200c', '').replace('\ufeff', '')
                    text = re.sub(r'READ MORE\.{3}|Read More\.{3}', '', text, flags=re.I)
                    text = re.sub(r'Spotlight Case Study', '', text)
                    text = re.sub(r'\s+', ' ', text).strip()

                    if text:
                        entries.append({
                            "title": title,
                            "qii": qii,
                            "ip": ip,
                            "url": url,
                            "secId": sec_id,
                            "content": text,
                        })

                sec_count = len([s for s in sections if s["text"].strip()])
                print(f"  OK  {url} -> {sec_count} sections")

            except Exception as e:
                print(f"  ERROR {url} -> {e}")

        browser.close()

    return entries


# ── Output ─────────────────────────────────────────────────────────────────

def write_output(entries):
    """Write the search-index.js file with data + URL_TITLES."""
    lines = ['export const data = [']

    for entry in entries:
        def esc(s):
            return s.replace('\\', '\\\\').replace('"', '\\"')

        lines.append('{')
        lines.append(f'"title":"{esc(entry["title"])}",')
        lines.append(f'"qii":"{esc(entry["qii"])}",')
        lines.append(f'"ip":"{esc(entry["ip"])}",')
        lines.append(f'"url":"{esc(entry["url"])}",')
        lines.append(f'"secId":"{esc(entry["secId"])}",')
        lines.append(f'"content":"{esc(entry["content"])}"')
        lines.append('},')

    lines.append('];')
    lines.append('')

    # Write URL_TITLES
    lines.append('export const URL_TITLES = ' + json.dumps(URL_TITLES, ensure_ascii=False, indent=2) + ';')
    lines.append('')

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\nWrote {OUTPUT_FILE}")
    print(f"Total entries indexed: {len(entries)}")


# ── Main ───────────────────────────────────────────────────────────────────

def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    print("Parsing App.jsx for routes...")
    routes = parse_app_routes()
    print(f"Found {len(routes)} routes\n")

    print(f"\nMake sure your dev server is running: npm run dev")
    print(f"Connecting to {DEV_SERVER_URL}...\n")

    print("Extracting page content via headless browser...\n")
    entries = extract_all_pages(routes)

    print("\nWriting search-index.js...")
    write_output(entries)
    print("Done! -- Working")


if __name__ == "__main__":
    main()

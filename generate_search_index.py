"""
Generate search-index.js by loading each page in a headless browser and extracting innerText.
Developed By: Suyog Shaha
Usage:
  1. Start the dev server:  npm run dev
  2. Run this script:       python generate_search_index.py

Requirements: pip install playwright && playwright install chromium
"""

import re
import os
import sys
import subprocess
import time
import signal

# ── Config ──────────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(SCRIPT_DIR, "src")
APP_JSX = os.path.join(SRC_DIR, "App.jsx")
OUTPUT_FILE = os.path.join(SRC_DIR, "assets", "search-index.js")

DEV_SERVER_URL = "http://localhost:5173"

# Routes to skip (no searchable content)
EXCLUDE_PATHS = {"*"}


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


# ── Breadcrumb Extraction (from JSX files, needed for path label) ──────────

def get_breadcrumb_map():
    """Build a map of route URL -> breadcrumb path by reading page JSX files."""
    with open(APP_JSX, "r", encoding="utf-8") as f:
        content = f.read()

    # Build import map
    imports = {}
    for m in re.finditer(r'import\s+(\w+)\s+from\s+"([^"]+)"', content):
        imports[m.group(1)] = m.group(2)
    for m in re.finditer(r'const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(\s*"([^"]+)"\s*\)\)', content):
        imports[m.group(1)] = m.group(2)

    # Build route -> component map
    route_component = {}
    # Index route
    idx = re.search(r'index:\s*true[\s\S]{0,200}?<(\w+)', content)
    if idx and idx.group(1) in imports:
        route_component["/"] = imports[idx.group(1)]

    seen = {"/"}
    for m in re.finditer(r'path:\s*"([^"]*)"', content):
        path = m.group(1)
        if path in EXCLUDE_PATHS or path in seen:
            continue
        region = content[m.end():m.end() + 300]
        tags = re.findall(r'<(\w+)\s*(?:/>|>)', region)
        for tag in tags:
            if tag not in ("Suspense", "Loader"):
                if tag in imports:
                    route_component[path] = imports[tag]
                    seen.add(path)
                break

    # Read each file to extract breadcrumb
    bc_map = {}
    for url, import_path in route_component.items():
        clean = import_path.lstrip("./")
        file_path = os.path.join(SRC_DIR, clean)
        if not os.path.splitext(file_path)[1]:
            file_path += ".jsx"

        if not os.path.exists(file_path):
            bc_map[url] = "Home"
            continue

        with open(file_path, "r", encoding="utf-8") as f:
            raw = f.read()

        m = re.search(r'setBradcrump\(\s*\{[\s\S]*?dir:\s*\[([\s\S]*?)\]', raw)
        if m:
            titles = re.findall(r'title:\s*"([^"]*)"', m.group(1))
            bc_map[url] = " > ".join(t.strip()
                                     for t in titles) if titles else "Home"
        else:
            bc_map[url] = "Home"

    return bc_map


# ── Browser-based Text Extraction ──────────────────────────────────────────

def extract_all_pages(routes, bc_map):
    """Visit each route in headless browser and extract main.innerText."""
    from playwright.sync_api import sync_playwright

    entries = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for url in routes:
            full_url = f"{DEV_SERVER_URL}/#{url}"
            try:
                page.goto(full_url, wait_until="networkidle", timeout=15000)
                # Wait for main content to render
                page.wait_for_selector("main", timeout=5000)
                # Small extra wait for lazy-loaded content
                page.wait_for_timeout(800)

                # Extract visible text from <main> only (skip nav, footer)
                text = page.evaluate(
                    "() => document.querySelector('main')?.innerText || ''")

                # Clean up: strip zero-width chars, remove UI labels, collapse whitespace
                text = text.replace('\u200b', '').replace(
                    '\u200c', '').replace('\ufeff', '')
                text = re.sub(
                    r'READ MORE\.{3}|Read More\.{3}', '', text, flags=re.I)
                text = re.sub(r'Spotlight Case Study', '', text)
                text = re.sub(r'\s+', ' ', text).strip()

                breadcrumb = bc_map.get(url, "Home")

                if text:
                    entries.append({
                        "url": url,
                        "path": breadcrumb,
                        "content": text,
                    })
                    print(f"  OK  {url} -> {breadcrumb} ({len(text)} chars)")
                else:
                    print(f"  EMPTY {url} -> no text found in <main>")

            except Exception as e:
                print(f"  ERROR {url} -> {e}")

        browser.close()

    return entries


# ── Output ─────────────────────────────────────────────────────────────────

def write_output(entries):
    """Write the search-index.js file."""
    lines = ['export const data = [']

    for entry in entries:
        content_escaped = entry["content"].replace(
            '\\', '\\\\').replace('"', '\\"')
        path_escaped = entry["path"].replace('\\', '\\\\').replace('"', '\\"')

        lines.append('  {')
        lines.append(f'    url: "{entry["url"]}",')
        lines.append(f'    path: "{path_escaped}",')
        lines.append(f'    content:')
        lines.append(f'      "{content_escaped}",')
        lines.append('  },')

    lines.append('];')
    lines.append('')

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\nWrote {OUTPUT_FILE}")
    print(f"Total pages indexed: {len(entries)}")


# ── Main ───────────────────────────────────────────────────────────────────

def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    print("Parsing App.jsx for routes...")
    routes = parse_app_routes()
    print(f"Found {len(routes)} routes\n")

    print("Building breadcrumb map...")
    bc_map = get_breadcrumb_map()

    print(f"\nMake sure your dev server is running: npm run dev")
    print(f"Connecting to {DEV_SERVER_URL}...\n")

    print("Extracting page content via headless browser...\n")
    entries = extract_all_pages(routes, bc_map)

    print("\nWriting search-index.js...")
    write_output(entries)
    print("Done! -- Working")


if __name__ == "__main__":
    main()

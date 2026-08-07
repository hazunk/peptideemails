#!/usr/bin/env python3
"""Search or download Pexels images for blog articles.

Reads PEXELS_API_KEY from ../../.env.local (gitignored).

Usage:
  python3 pexels.py search "peptide vial laboratory"           # list candidates
  python3 pexels.py get "peptide vial laboratory" welcome-flow  # download top hit -> peptide-emails/public/images/blog/<slug>.jpg

Downloaded files self-host in the Next app so we don't depend on the Pexels CDN.
Pexels license: free for commercial use, no attribution required (we credit anyway).
"""
import json
import os
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]  # project root
ENV = ROOT / ".env.local"
PUBLIC_IMG = ROOT / "peptide-emails" / "public" / "images" / "blog"


def api_key() -> str:
    if ENV.exists():
        for line in ENV.read_text().splitlines():
            if line.strip().startswith("PEXELS_API_KEY="):
                return line.split("=", 1)[1].strip()
    key = os.environ.get("PEXELS_API_KEY")
    if not key:
        sys.exit("PEXELS_API_KEY not found in .env.local or environment")
    return key


def search(query: str, per_page: int = 6, orientation: str = "landscape"):
    qs = urllib.parse.urlencode(
        {"query": query, "per_page": per_page, "orientation": orientation}
    )
    req = urllib.request.Request(
        f"https://api.pexels.com/v1/search?{qs}",
        headers={"Authorization": api_key(), "User-Agent": "PeptideEmails-blog/1.0"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def cmd_search(query: str):
    data = search(query)
    for p in data.get("photos", []):
        print(f"[{p['id']}] {p['alt'][:70]!r}")
        print(f"     by {p['photographer']} — {p['url']}")
        print(f"     landscape: {p['src']['landscape']}")


def cmd_get(query: str, slug: str):
    data = search(query)
    photos = data.get("photos", [])
    if not photos:
        sys.exit(f"No Pexels results for {query!r}")
    p = photos[0]
    url = p["src"]["large2x"]
    PUBLIC_IMG.mkdir(parents=True, exist_ok=True)
    dest = PUBLIC_IMG / f"{slug}.jpg"
    img_req = urllib.request.Request(url, headers={"User-Agent": "PeptideEmails-blog/1.0"})
    with urllib.request.urlopen(img_req, timeout=60) as r:
        dest.write_bytes(r.read())
    credit = f"Photo by {p['photographer']} on Pexels"
    print(json.dumps({
        "file": str(dest),
        "public_path": f"/images/blog/{slug}.jpg",
        "alt": p["alt"],
        "credit": credit,
        "source": p["url"],
    }, indent=2))


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    action = sys.argv[1]
    if action == "search":
        cmd_search(sys.argv[2])
    elif action == "get":
        if len(sys.argv) < 4:
            sys.exit("Usage: pexels.py get <query> <slug>")
        cmd_get(sys.argv[2], sys.argv[3])
    else:
        sys.exit(__doc__)

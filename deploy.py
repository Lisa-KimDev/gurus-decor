#!/usr/bin/env python3
"""Deploy gurus-decor to Vercel via API (source upload, Vercel builds)."""
import base64, json, os, sys, time
import urllib.request
import urllib.error

ROOT = "/root/gurus-decor"
TEAM = "cryptosis-projects"
TOKEN = json.load(open(os.path.join(os.path.expanduser("~"), ".vercel/auth.json")))["token"]

SKIP_DIRS = {"node_modules", ".next", ".git", ".vercel", "out", ".hermes"}

def gather():
    files = []
    for path, dirs, names in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for n in names:
            if n == "deploy.py":
                continue
            full = os.path.join(path, n)
            files.append(os.path.relpath(full, ROOT))
    return files

rel_files = gather()
print(f"uploading {len(rel_files)} files")

payload = {
    "name": "gurus-decor",
    "files": [
        {
            "file": f,
            "data": base64.b64encode(open(os.path.join(ROOT, f), "rb").read()).decode(),
            "encoding": "base64",
        }
        for f in rel_files
    ],
    "projectSettings": {"framework": "nextjs"},
}

req = urllib.request.Request(
    f"https://api.vercel.com/v13/deployments?teamId={TEAM}",
    data=json.dumps(payload).encode(),
    headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"},
    method="POST",
)
try:
    with urllib.request.urlopen(req) as r:
        dep = json.load(r)
except urllib.error.HTTPError as e:
    sys.exit(f"Deploy failed {e.code}: {e.read().decode()[:800]}")

url = dep.get("url")
did = dep["id"]
print(f"deploy id: {did}")
print(f"url: https://{url}")

state = None
for _ in range(120):
    time.sleep(3)
    req = urllib.request.Request(
        f"https://api.vercel.com/v13/deployments/{did}?teamId={TEAM}",
        headers={"Authorization": f"Bearer {TOKEN}"},
    )
    with urllib.request.urlopen(req) as r:
        d = json.load(r)
    state = d["readyState"]
    if state in ("READY", "ERROR", "CANCELED"):
        break

print(f"state: {state}")
if state != "READY":
    sys.exit(1)

probe = urllib.request.Request(f"https://{url}/photos/media/video-blue-duo.mp4", method="HEAD")
with urllib.request.urlopen(probe) as r:
    print(f"video probe: {r.status} {r.headers.get('Content-Type')} {r.headers.get('Content-Length')} bytes")
print("DEPLOY OK")

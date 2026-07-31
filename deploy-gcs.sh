#!/usr/bin/env bash
#
# Deploy the static site to a Google Cloud Storage bucket.
#
# One-time setup lives in `just gcs-init`; this script is the per-deploy step.
# Cache headers matter more than anything else here:
#
#   images/*     immutable, 1 year  - filenames are stable, content is not
#                                     edited in place; a changed photo gets a
#                                     new name or a manual cache purge
#   index.html   must-revalidate    - so a deploy is live immediately instead
#                                     of pinned behind a CDN TTL
#
set -euo pipefail

BUCKET="${BUCKET:?BUCKET is required, e.g. BUCKET=shagunbandi.com ./deploy-gcs.sh}"
DEST="gs://${BUCKET}"

command -v gcloud >/dev/null || { echo "gcloud not found: https://cloud.google.com/sdk/docs/install" >&2; exit 1; }

echo "==> Uploading images/ to ${DEST}/images/ (immutable, 1y)"
gcloud storage cp --recursive images/* "${DEST}/images/" \
  --cache-control="public, max-age=31536000, immutable"

echo "==> Uploading index.html to ${DEST}/ (must-revalidate)"
gcloud storage cp index.html "${DEST}/index.html" \
  --cache-control="public, max-age=0, must-revalidate"

echo "==> Done. Objects in bucket:"
gcloud storage ls --long "${DEST}/**" | tail -5

cat <<'EOF'

If you changed index.html, purge it at the Cloudflare edge so visitors
do not wait out a cached copy:

  Cloudflare dashboard -> Caching -> Configuration -> Purge Everything

EOF

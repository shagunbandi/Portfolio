# Portfolio Management Commands

# Start the portfolio application
up:
    @echo "Ensuring portfolio_network exists..."
    @docker network inspect portfolio_network >/dev/null 2>&1 || docker network create portfolio_network
    docker-compose up -d

# Stop the portfolio application
down:
    docker-compose down

# View logs
logs:
    docker-compose logs -f

# Rebuild and restart
rebuild:
    docker-compose down
    docker-compose build --no-cache
    docker-compose up -d

# Check status
status:
    docker-compose ps

# Restart the application
restart:
    docker-compose restart

# Serve locally to preview without Docker
serve:
    @echo "http://127.0.0.1:8000"
    python3 -m http.server 8000

# --- Google Cloud Storage hosting ---

# One-time: create the bucket, make it public, enable website mode
gcs-init bucket:
    gcloud storage buckets create gs://{{bucket}} --uniform-bucket-level-access
    gcloud storage buckets add-iam-policy-binding gs://{{bucket}} \
        --member=allUsers --role=roles/storage.objectViewer
    gcloud storage buckets update gs://{{bucket}} \
        --web-main-page-suffix=index.html --web-error-page=index.html

# Deploy the site to the bucket
gcs-deploy bucket:
    BUCKET={{bucket}} ./deploy-gcs.sh

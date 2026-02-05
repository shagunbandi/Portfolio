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

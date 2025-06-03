#!/bin/bash

set -e

echo "🚀 Starting Infrastructure Services..."

echo "📦 Building Docker containers..."
docker-compose build --parallel

echo "🗄️  Starting core services (PostgreSQL, Redis, Traefik)..."
docker-compose up -d postgres redis traefik

echo "⏳ Waiting for PostgreSQL to be ready..."
until docker-compose exec -T postgres pg_isready -U postgres > /dev/null 2>&1; do
  sleep 1
done

echo "⏳ Waiting for Redis to be ready..."
until docker-compose exec -T redis redis-cli ping > /dev/null 2>&1; do
  sleep 1
done

echo "✅ Core infrastructure is ready!"
echo ""
echo "📋 Available services:"
echo "   - PostgreSQL: localhost:5432"
echo "   - Redis: localhost:6379"
echo "   - Traefik Dashboard: http://localhost:8080"
echo ""
echo "🎯 Next steps:"
echo "   npm run docker:auth-stack    # Start auth service"
echo "   npm run dev                  # Start development"
echo ""

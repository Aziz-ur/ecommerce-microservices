#!/bin/bash

set -e

echo "🛑 Stopping Infrastructure Services..."

echo "📦 Stopping all services..."
docker-compose down

echo "🧹 Cleaning up containers..."
docker-compose down --remove-orphans

echo "✅ Infrastructure stopped successfully!"
echo ""
echo "🗑️  To clean everything (including volumes):"
echo "   npm run docker:clean"
echo ""

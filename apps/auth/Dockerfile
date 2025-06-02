# Multi-stage build for production optimization
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy root package files for workspace resolution
COPY package*.json ./
COPY turbo.json ./

# Copy auth service package files
COPY apps/auth/package*.json ./apps/auth/

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Build stage
FROM base AS builder
WORKDIR /app

# Copy source code
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Generate Prisma Client for auth service
WORKDIR /app/apps/auth
RUN npx prisma generate

# Build the auth service
WORKDIR /app
RUN npx turbo build --filter=auth

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copy built application with proper ownership
COPY --from=builder --chown=nestjs:nodejs /app/apps/auth/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/auth/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/apps/auth/package.json ./package.json
COPY --from=builder --chown=nestjs:nodejs /app/apps/auth/prisma ./prisma

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Switch to non-root user
USER nestjs

# Expose service port
EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/auth/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["node", "dist/main"]

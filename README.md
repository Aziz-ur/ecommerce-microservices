# 🛒 E-Commerce Microservices Platform

> **⚠️ This project is currently under construction.**

A modern, cloud-native e-commerce platform built with **microservices
architecture** using **NestJS**, **TypeScript**, and **Docker**. Designed for
high performance, scalability, and enterprise-grade reliability.

## 🏗️ Architecture Overview

Independent, loosely-coupled microservices communicating through **event-driven
architecture**:

### Core Services

| Service              | Purpose                          | Database             | Cache | Events         |
| -------------------- | -------------------------------- | -------------------- | ----- | -------------- |
| 🔐 **Auth**          | Authentication & User Management | PostgreSQL           | Redis | User events    |
| 📦 **Catalog**       | Product Management & Search      | PostgreSQL + MongoDB | Redis | Product events |
| 🛒 **Orders**        | Cart & Order Processing          | PostgreSQL           | Redis | Order events   |
| 💳 **Payments**      | Payment Processing               | PostgreSQL           | —     | Payment events |
| 📊 **Inventory**     | Stock Management                 | PostgreSQL           | Redis | Stock events   |
| 📧 **Notifications** | Email/SMS Notifications          | PostgreSQL           | —     | All events     |

## 🚀 Technology Stack

**Backend**: NestJS, TypeScript, Prisma ORM **Databases**: PostgreSQL, MongoDB,
Redis, Elasticsearch **Messaging**: Apache Kafka **Infrastructure**: Docker,
Kubernetes, Traefik **Monitoring**: Prometheus, Grafana, ELK Stack **DevOps**:
GitHub Actions, TurboRepo

## 🎯 Key Features

- ✅ **Microservices Architecture** - Independent scaling and deployment
- ✅ **Event-Driven Communication** - Loose coupling via Kafka
- ✅ **Auto-Scaling** - Kubernetes horizontal pod autoscaling
- ✅ **Type Safety** - Full TypeScript implementation
- ✅ **Caching Strategy** - Multi-level Redis caching
- ✅ **API Gateway** - Traefik with service discovery

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- Docker & Docker Compose
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/Aziz-ur/ecommerce-microservices.git
cd ecommerce-microservices

# Install dependencies
npm install

# Start infrastructure
npm run docker:infra

# Start auth service (example)
npm run docker:auth-stack
```

## ⚡ Development

### TurboRepo Commands

```bash
turbo build      # Build all services
turbo dev        # Development mode
turbo test       # Run tests
turbo lint       # Lint code
turbo type-check # TypeScript validation
```

### Service-Specific Development

```bash
npm run docker:auth-stack    # Auth service + dependencies
npm run docker:catalog-stack # Catalog service + search + messaging
npm run docker:orders-stack  # Orders service + messaging
```

### Database Operations

```bash
npm run db:migrate # Run migrations
npm run db:seed    # Seed data
npm run db:studio  # Prisma Studio
```

## 📁 Project Structure

```
ecommerce-microservices/
├── apps/                      # Microservices
│   ├── auth/                  # Authentication service
│   ├── catalog/               # Product catalog
│   ├── orders/                # Order management
│   ├── payments/              # Payment processing
│   ├── inventory/             # Stock management
│   └── notifications/         # Notifications
├── packages/                  # Shared libraries
├── k8s/                       # Kubernetes manifests
├── scripts/                   # Utility scripts
└── monitoring/                # Observability config
```

## 🔧 Local Development Environment

- **API Gateway**: http://localhost (Traefik)
- **Traefik Dashboard**: http://localhost:8080
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379
- **MongoDB**: localhost:27017
- **Kafka**: localhost:9092

### Service Endpoints

- **Auth**: http://localhost:3001/api/auth
- **Catalog**: http://localhost:3002/api/catalog
- **Orders**: http://localhost:3003/api/orders
- **Payments**: http://localhost:3004/api/payments
- **Inventory**: http://localhost:3005/api/inventory
- **Notifications**: http://localhost:3006/api/notifications

## 🧪 Testing

```bash
npm run test     # Unit tests
npm run test:e2e # End-to-end tests
npm run test:cov # Coverage report
```

## 🚢 Deployment

### Docker Commands

```bash
npm run docker:build # Build images
npm run docker:up    # Start all services
npm run docker:down  # Stop services
npm run docker:clean # Clean everything
```

### Kubernetes

```bash
npm run k8s:dev:deploy  # Deploy to dev
npm run k8s:prod:deploy # Deploy to production
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Use conventional commits: `npm run commit`
4. Write tests and maintain 80%+ coverage
5. Submit PR with detailed description

### Commit Format

```
feat(auth): add user registration
fix(orders): resolve cart calculation bug
docs(readme): update setup instructions
```

## 📈 Roadmap

### Current Phase

- [x] Project setup and infrastructure
- [x] Development environment
- [x] CI/CD pipeline
- [ ] Core services implementation

### Next Phase

- [ ] Payment integration
- [ ] Advanced search
- [ ] Real-time notifications
- [ ] Performance optimization

## 📚 Documentation

- [Architecture Guide](docs/ARCHITECTURE.md)
- [API Documentation](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Development Setup](docs/DEVELOPMENT.md)

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [@Aziz-ur](https://github.com/Aziz-ur)
- **LinkedIn**:
  [Azizur Rahman Faisal](https://www.linkedin.com/in/azizur-rahman-faisal/)
- **Email**: a.r.faisal13@gmail.com

---

<div align="center">

**Built with ❤️ by [Azizur Rahman Faisal](https://github.com/Aziz-ur)**

⭐ Star • 🔄 Share • 🐛 Report Issues

</div>

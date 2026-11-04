# FlowSync — Project Charter

## 1. Project Purpose & Summary
**FlowSync** is an enterprise-grade, real-time team collaboration and project management platform. The purpose of this project is two-fold:
1. Build a production-ready, highly reliable, scalable fullstack collaboration system (Workspaces, Projects, Kanban Boards, Real-time Chat/Updates, BullMQ Background Processing, Streaming Data Engine, S3 Object Storage).
2. Serve as an Engineering Mastery & Portfolio platform for the User, mastering modern backend, frontend, infrastructure, and system design patterns through hands-on implementation (Zero Vibe Coding).

## 2. Project Organization & Roles
- **Project Manager (PM) & Product Owner (PO)**: User
  - Final decision maker for scope, priorities, sprint goals, and technical acceptance.
- **Primary Developer**: User
  - Authors and tests all production code in `apps/*` and `packages/*`.
- **AI Principal Engineering Partner & Scrum Master**: Antigravity AI
  - System architecture guidance, sprint orchestration, technical mentorship, code review, debugging assistance, documentation maintenance.

## 3. High-Level Scope
- **In Scope (MVP & Target Release v1.0)**:
  - Multi-tenant Workspace management with RBAC (`OWNER`, `ADMIN`, `MEMBER`, `VIEWER`).
  - Project and Kanban Task workflow (Drag-and-drop with Lexorank / fractional indexing).
  - Dual-token Authentication (Access Token + HttpOnly Refresh Token rotation).
  - Real-time collaboration engine via Socket.IO (Task events, presence, chat).
  - Redis integration for caching, rate limiting, and Socket.IO multi-node adapter.
  - Background Job Queue with BullMQ (`apps/worker`).
  - High-performance Streaming Excel Import/Export (500k+ rows without memory exhaustion).
  - S3-compatible Object Storage via MinIO with direct client presigned URLs.
  - Interactive SQL analytics dashboard with PostgreSQL aggregations and Recharts.
  - Automated tests (Unit, Integration, E2E) and production Docker/Nginx configuration.
- **Out of Scope (Post-v1.0)**:
  - Complex microservice orchestration (Kubernetes) prior to measured architectural bottleneck.
  - Third-party OAuth integrations (Google/GitHub SSO) until core auth is proven.
  - Video/Audio conferencing.

## 4. Key Milestones
- **Phase 0 (Sprint 0)**: Project Foundation, Governance & Planning
- **Phase 1 (Sprint 1-2)**: Monorepo Setup, First API, Database & Backend Architecture
- **Phase 2 (Sprint 3-6)**: Authentication, Workspaces, Projects & Task Management
- **Phase 3 (Sprint 7)**: Next.js Frontend & Kanban UI Integration
- **Phase 4 (Sprint 8-9)**: Realtime Engine (Socket.IO, Presence, Chat, Notifications)
- **Phase 5 (Sprint 10-11)**: Advanced Backend (Redis, BullMQ Worker, Streaming Excel, MinIO S3)
- **Phase 6 (Sprint 12)**: Production Hardening, Testing, Dockerization & Release v1.0

# FlowSync — Product Backlog

## Epic Overview
- **EPIC-0**: Governance, Monorepo Scaffolding & Infrastructure (Sprint 0)
- **EPIC-1**: Monorepo Pipeline & Healthcheck First API (Sprint 1)
- **EPIC-2**: Database Architecture & Base Backend Standards (Sprint 2)
- **EPIC-3**: Authentication & Security Subsystem (Sprint 3)
- **EPIC-4**: Multi-Tenant Workspaces & RBAC Engine (Sprint 4)
- **EPIC-5**: Project Management Module (Sprint 5)
- **EPIC-6**: Task Management, Comments & Complex Search (Sprint 6)
- **EPIC-7**: Frontend Kanban Board & UI State Engine (Sprint 7)
- **EPIC-8**: Realtime Task Synchronization Engine (Socket.IO) (Sprint 8)
- **EPIC-9**: Realtime Collaboration: Chat, Presence & Notifications (Sprint 9)
- **EPIC-10**: Redis Caching, Worker Process & MinIO S3 Storage (Sprint 10)
- **EPIC-11**: High-Capacity Streaming Excel & SQL Analytics (Sprint 11)
- **EPIC-12**: Production Hardening, Testing & Release v1.0 (Sprint 12)

---

## Detailed Product Backlog Items

### EPIC-0: Governance, Monorepo Scaffolding & Infrastructure (Sprint 0)
* **ST-001**: Git Repository Initialization & `.gitignore` configuration [COMPLETED]
* **ST-002**: Master Project Instructions & AI Rules (`AGENTS.md`) [COMPLETED]
* **ST-003**: Governance & Documentation Suite (`docs/`) [COMPLETED]
* **ST-004**: Definition of Ready (DoR) & Definition of Done (DoD) [COMPLETED]
* **ST-005**: Monorepo Scaffolding (`pnpm-workspace.yaml`, root `package.json`, apps/packages placeholders) [IN_PROGRESS]
* **ST-006**: Local Infrastructure Docker Compose (`docker-compose.yml`) [IN_PROGRESS]

### EPIC-1: Engineering Foundation & First API (Sprint 1)
* **ST-101**: Monorepo orchestration configuration (`turbo.json` and root build/dev scripts)
* **ST-102**: Initialize NestJS API starter app in `apps/api` with TypeScript
* **ST-103**: Initialize Next.js 16 App Router starter web app in `apps/web` with Tailwind CSS
* **ST-104**: Implement GET `/health` endpoint in NestJS (returning status, uptime, timestamp)
* **ST-105**: Configure frontend HTTP client and verify frontend-to-backend communication
* **ST-106**: Setup centralized environment configuration with validation in `packages/config`

### EPIC-2: Database & Backend Architecture (Sprint 2)
* **ST-201**: Setup Prisma ORM connected to PostgreSQL 16 container
* **ST-202**: Design initial Prisma schema (`User`, `Workspace`, `Member`) and execute initial migration
* **ST-203**: Implement Global Exception Filter and standard API response wrapper
* **ST-204**: Configure global ValidationPipe with `class-validator` and `class-transformer`
* **ST-205**: Integrate OpenAPI / Swagger documentation (`/api/docs`)
* **ST-206**: Write first automated unit tests for Health & Base Service

### EPIC-3: Authentication & Security (Sprint 3)
* **ST-301**: Implement password hashing with Argon2 / Bcrypt
* **ST-302**: Implement user registration endpoint (POST `/auth/register`) with validation
* **ST-303**: Implement user login (POST `/auth/login`) with Dual-Token generation (Access Token + Refresh Token)
* **ST-304**: Implement Refresh Token rotation with HttpOnly/SameSite cookies (POST `/auth/refresh`)
* **ST-305**: Implement logout and token invalidation (POST `/auth/logout`)
* **ST-306**: Build `JwtAuthGuard`, Passport JWT strategy, and `@CurrentUser()` decorator
* **ST-307**: Automated integration tests for authentication lifecycle

### EPIC-4: Workspaces & RBAC (Sprint 4)
* **ST-401**: Implement Workspace CRUD endpoints (POST, GET, PATCH, DELETE `/workspaces`)
* **ST-402**: Implement Workspace Member assignment and Role models (`OWNER`, `ADMIN`, `MEMBER`, `VIEWER`)
* **ST-403**: Build `@Roles()` decorator and `RolesGuard` for declarative authorization
* **ST-404**: Implement token-based workspace invitation system with expiration
* **ST-405**: Acceptance tests for multi-tenant isolation (User A cannot read Workspace B)

### EPIC-5: Project Management (Sprint 5)
* **ST-501**: Implement Project CRUD endpoints scoped to Workspace
* **ST-502**: Database indexing on `workspaceId`, `status`, and `createdBy`
* **ST-503**: Project member assignment and custom project permissions
* **ST-504**: Project archiving and soft deletion workflow
* **ST-505**: Cursor-based and offset pagination for project queries

### EPIC-6: Task Management, Comments & Search (Sprint 6)
* **ST-601**: Implement Task CRUD with status workflow (`TODO`, `IN_PROGRESS`, `REVIEW`, `DONE`)
* **ST-602**: Implement priority levels (`LOW`, `MEDIUM`, `HIGH`, `URGENT`) and due dates
* **ST-603**: Task ordering algorithm (Fractional Indexing / Lexorank strategy)
* **ST-604**: Task comment threads (CRUD, mentions, timestamps)
* **ST-605**: Complex task filtering, status grouping, and full-text search

### EPIC-7: Frontend Kanban Board & UI State Engine (Sprint 7)
* **ST-701**: Setup Next.js App Router layout, authentication context, and protected route middleware
* **ST-702**: Setup shadcn/ui design system and responsive application shell
* **ST-703**: Setup TanStack Query for server-state caching and synchronization
* **ST-704**: Build interactive Kanban board using `dnd-kit`
* **ST-705**: Implement Optimistic UI updates for drag-and-drop task movements
* **ST-706**: Build Task Details modal, creation forms, and inline editing with React Hook Form + Zod

### EPIC-8: Realtime Task Synchronization Engine (Sprint 8)
* **ST-801**: Implement NestJS Socket.IO Gateway with JWT handshake authentication
* **ST-802**: Dynamic room management: join/leave `project:{id}` rooms
* **ST-803**: Broadcast task lifecycle events (`task:created`, `task:updated`, `task:moved`, `task:deleted`)
* **ST-804**: Synchronize frontend TanStack Query cache upon incoming Socket.IO events

### EPIC-9: Realtime Collaboration: Chat, Presence & Notifications (Sprint 9)
* **ST-901**: Real-time project chat channel with persistent message storage in PostgreSQL
* **ST-902**: Online presence tracker using Redis / WebSocket connection maps
* **ST-903**: Typing indicators (`user:typing`) with debounce
* **ST-904**: In-app notifications subsystem and unread count badge
* **ST-905**: Activity audit log recording all major project changes

### EPIC-10: Redis Caching, Worker Process & MinIO S3 Storage (Sprint 10)
* **ST-1001**: Integrate Redis cache-aside pattern for heavy project/workspace queries
* **ST-1002**: Attach Socket.IO Redis Adapter for multi-node horizontal scaling
* **ST-1003**: Build standalone `apps/worker` application powered by BullMQ
* **ST-1004**: Implement async notification and email background jobs with retry and DLQ
* **ST-1005**: Integrate MinIO S3 object storage
* **ST-1006**: Direct client file uploads via Presigned PUT URLs and secure download URLs

### EPIC-11: Streaming Excel & SQL Analytics (Sprint 11)
* **ST-1101**: High-performance streaming Excel export (500k+ tasks) via Node.js Transform streams
* **ST-1102**: Chunked bulk Excel import with validation, progress tracking, and error reporting
* **ST-1103**: Analytics queries using PostgreSQL Window Functions (`ROW_NUMBER()`, `LAG()`, aggregations)
* **ST-1104**: Interactive Analytics dashboard in Next.js using Recharts

### EPIC-12: Production Hardening, Testing & Release v1.0 (Sprint 12)
* **ST-1201**: Multi-stage Dockerfiles for `apps/web`, `apps/api`, and `apps/worker` (<150MB images)
* **ST-1202**: Nginx reverse proxy configuration with SSL termination and WebSocket `Upgrade` headers
* **ST-1203**: Automated Integration testing suite using Testcontainers
* **ST-1204**: Automated E2E testing with Playwright (Critical user journeys)
* **ST-1205**: GitHub Actions CI/CD workflow (Lint, Typecheck, Test, Build)
* **ST-1206**: Release notes, Architecture documentation finalize, and Portfolio presentation

# FlowSync Project State

> **Notice**: This document is the persistent Single Source of Truth for project state, progress tracking, architecture decisions, blockers, and sprint milestones. It is updated at every sprint boundary and upon major state changes.

## General Information
- **Project Name**: FlowSync
- **Repository Path**: `D:\Workspace\MOP\FlowSync – Real-time Team Collaboration Platform`
- **Current Phase**: Phase 1 — Engineering Foundation
- **Current Sprint**: Sprint 2 — Database & Backend Architecture
- **Sprint Goal**: Xây dựng nền tảng Backend chuẩn mực doanh nghiệp: Tích hợp Prisma ORM kết nối với PostgreSQL, thiết kế các bảng dữ liệu cốt lõi đầu tiên (User, Workspace, Member), thiết lập bộ lọc kiểm tra dữ liệu đầu vào (DTO Validation Pipe), và kích hoạt giao diện tài liệu tương tác Swagger API (/api/docs).
- **Sprint Status**: COMPLETED (100% Acceptance Criteria Met)

---

## Sprint 2 Execution Progress
- [x] **Task 1**: Cài đặt Prisma ORM (`prisma@^6.4.1`, `@prisma/client@^6.4.1` - ổn định, chuẩn hóa LTS)
- [x] **Task 2**: Thiết kế Schema-First (`schema.prisma`) và chạy thành công Migration tạo bảng `users`, `workspaces`, `workspace_members`
- [x] **Task 3**: Xây dựng `PrismaService` (Singleton lifecycle `$connect` / `$disconnect`) và `PrismaModule` `@Global()`
- [x] **Task 4**: Thiết lập `ValidationPipe` toàn cục với `class-validator` & `class-transformer` (`whitelist: true`, `forbidNonWhitelisted: true`, `transform: true`)
- [x] **Task 5**: Tích hợp Swagger / OpenAPI (`/api/docs`) với `@nestjs/swagger@^7.4.2`

---

## Backlog & Story Summary
- **Completed Stories**: ST-001 -> ST-006 (Sprint 0), ST-101 -> ST-105 (Sprint 1), ST-201 -> ST-205 (Sprint 2)
- **Incomplete Stories (Current Sprint)**: None
- **Current Blockers**: None
- **Known Bugs**: None
- **Technical Debt**: None

---

## Architecture Decisions Recorded (ADR Summary)
- **ADR-001**: Modular Monolith over Microservices for initial build phases (Martin Fowler Monolith First pattern).
- **ADR-002**: npm Workspaces for Monorepo code sharing across web, api, and worker.
- **ADR-003**: Docker Compose for local infrastructure isolation (PostgreSQL 16, Redis 7, MinIO).
- **ADR-004**: Git Branching Strategy using GitHub Flow (`main` branch for stable release; `dev` / feature branches per sprint).
- **ADR-005**: Official Package Manager: npm (v10+) and native npm Workspaces selected over pnpm.
- **ADR-006**: Port Mapping: Dedicated host port 5435 mapped to container port 5432 to eliminate Windows PostgreSQL service collisions.
- **ADR-007**: Centralized Configuration: `@nestjs/config` adopted for type-safe environment variable management.
- **ADR-008**: Database Access: Prisma ORM (v6 LTS) selected with Schema-First migration workflow over raw SQL / Database-First.
- **ADR-009**: Global Validation: `ValidationPipe` with strict whitelisting to eliminate mass-assignment vulnerabilities.
- **ADR-010**: API Contracts: OpenAPI / Swagger integrated at `/api/docs` as the single interactive contract between Frontend and Backend.

---

## Learning Progress (Evidence-Based)
- **Prisma ORM & Migration Strategies**: MASTERED -> Designed multi-table schema, executed migrations, understood Schema-first vs DB-first trade-offs.
- **Dependency Management & Peer Dependencies**: MASTERED -> Successfully resolved npm peer dependency conflicts with `@nestjs/config` and `@nestjs/swagger`.
- **API Documentation & Contracts**: PRACTICING -> Configured OpenAPI DocumentBuilder and Swagger decorators.
- **Defensive Backend Architecture**: PRACTICING -> Configured global validation pipes and exception-safe database queries.

---

## Next Priority & Next Sprint
- Perform **Sprint 2 Review & Retrospective** with PM.
- Transition to **Phase 2 — Core Application | Sprint 3: Authentication & Security**:
  - Mã hóa mật khẩu bảo mật bằng Argon2 / Bcrypt.
  - Xây dựng luồng Đăng ký (Register) & Đăng nhập (Login).
  - Kiến trúc Dual-Token: Access Token (ngắn hạn trong memory/header) + Refresh Token (dài hạn trong HttpOnly Cookie).
  - Triển khai cơ chế Refresh Token Rotation và Auth Guards (`JwtAuthGuard`, `@CurrentUser()`).

# FlowSync Project State

> **Notice**: This document is the persistent Single Source of Truth for project state, progress tracking, architecture decisions, blockers, and sprint milestones. It is updated at every sprint boundary and upon major state changes.

## General Information
- **Project Name**: FlowSync
- **Repository Path**: `D:\Workspace\MOP\FlowSync – Real-time Team Collaboration Platform`
- **Current Phase**: Phase 1 — Engineering Foundation
- **Current Sprint**: Sprint 1 — Development Environment & First API
- **Sprint Goal**: Xây dựng và làm chủ một NestJS API cơ bản trong môi trường npm Monorepo, khởi động PostgreSQL qua Docker Compose, kết nối ứng dụng với Database qua biến môi trường (.env) và xây dựng endpoint `/health` kiểm tra toàn diện trạng thái server và dữ liệu.
- **Sprint Status**: COMPLETED (100% Acceptance Criteria Met)

---

## Sprint 1 Execution Progress
- [x] **Task 1**: Khởi động PostgreSQL 16 qua Docker Compose (giải quyết triệt để xung đột cổng 5432/5433, map cổng an toàn 5435:5432)
- [x] **Task 2**: Làm chủ bản chất kiến trúc NestJS (Module, Controller, Service, Dependency Injection container)
- [x] **Task 3**: Khởi tạo ứng dụng `apps/api` bằng npm Workspaces thuần túy (không dùng generator CLI)
- [x] **Task 4**: Kết nối NestJS với PostgreSQL qua Connection Pool (`pg` driver) và bảo mật bằng biến môi trường qua `@nestjs/config`
- [x] **Task 5**: Xây dựng Endpoint GET `/health` kiểm thử thực tế với cơ chế chịu lỗi (Fault Tolerance)

---

## Backlog & Story Summary
- **Completed Stories (Current Sprint)**: ST-101, ST-102, ST-104 (100%)
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
- **ADR-007**: Centralized Configuration: `@nestjs/config` adopted for type-safe environment variable management without hardcoded credentials.

---

## Learning Progress (Evidence-Based)
- **NestJS Architecture & DI**: PRACTICING -> Implemented Root AppModule, HealthModule, Controller, and Service with Dependency Injection.
- **HTTP Protocols & REST Design**: PRACTICING -> Built GET `/health` endpoint with status codes and structured JSON response.
- **PostgreSQL & Docker Networking**: MASTERED -> Solved port collisions, volume mappings, and container lifecycle.
- **Node.js Environment Security**: PRACTICING -> Successfully migrated hardcoded database credentials to `.env` using `@nestjs/config`.

---

## Next Priority & Next Sprint
- Perform **Sprint 1 Review & Retrospective** with PM.
- Transition to **Sprint 2: Database & Backend Architecture**:
  - Tích hợp Prisma ORM kết nối với PostgreSQL.
  - Thiết kế Schema cơ sở dữ liệu ban đầu (`User`, `Workspace`, `Member`).
  - Thiết lập Global Exception Filter và Validation Pipe (`class-validator`, `zod`).
  - Tích hợp OpenAPI / Swagger (`/api/docs`) để trực quan hóa API.

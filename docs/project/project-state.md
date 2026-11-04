# FlowSync Project State

> **Notice**: This document is the persistent Single Source of Truth for project state, progress tracking, architecture decisions, blockers, and sprint milestones. It is updated at every sprint boundary and upon major state changes.

## General Information
- **Project Name**: FlowSync
- **Repository Path**: `D:\Workspace\MOP\FlowSync – Real-time Team Collaboration Platform`
- **Current Phase**: Phase 0 — Project Initiation
- **Current Sprint**: Sprint 0 — Project Foundation & Governance
- **Sprint Goal**: Establish project governance, create master documentation suite in `docs/`, initialize Git repository, configure Monorepo (pnpm + Turborepo), and prepare local Docker infrastructure (PostgreSQL 16, Redis 7, MinIO).
- **Sprint Status**: IN_PROGRESS

---

## Sprint 0 Execution Progress
- [x] **ST-001**: Git Repository Initialization & `.gitignore` configuration
- [x] **ST-002**: Master Project Instructions & AI Rules (`AGENTS.md`) at root
- [x] **ST-003**: Governance & Documentation Skeleton (`docs/project/`, `docs/scrum/`, `docs/architecture/`, `docs/learning/`)
- [ ] **ST-004**: Definition of Ready (DoR) & Definition of Done (DoD) formalization
- [ ] **ST-005**: Monorepo Scaffolding (`pnpm-workspace.yaml`, root `package.json`, apps/packages placeholders)
- [ ] **ST-006**: Local Infrastructure Docker Compose (`docker-compose.yml`)

---

## Backlog & Story Summary
- **Completed Stories (Current Sprint)**: ST-001, ST-002, ST-003
- **Incomplete Stories (Current Sprint)**: ST-004, ST-005, ST-006
- **Current Blockers**: None
- **Known Bugs**: None
- **Technical Debt**: None (Greenfield project)

---

## Architecture Decisions Recorded (ADR Summary)
- **ADR-001**: Modular Monolith over Microservices for initial build phases (Martin Fowler Monolith First pattern).
- **ADR-002**: Turborepo + pnpm workspaces for Monorepo code sharing across web, api, and worker.
- **ADR-003**: Docker Compose for local infrastructure isolation (PostgreSQL 16, Redis 7, MinIO).

---

## Learning Progress (Evidence-Based)
- **Git & Monorepo Setup**: LEARNING
- **Docker Compose Orchestration**: LEARNING

---

## Next Priority & Next Sprint
- Complete ST-004, ST-005, ST-006 to conclude Sprint 0.
- Perform Sprint 0 Review & Retrospective with PM.
- Start **Sprint 1**: Development Environment, First API & Monorepo Pipeline.

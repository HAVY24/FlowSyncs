# FlowSync — System Design & Architecture Specification

## 1. High-Level Architecture Overview

FlowSync adopts a **Modular Monolith** architecture for the core backend, paired with an asynchronous background worker process and a high-performance React/Next.js frontend.

```
                    ┌─────────────────────────────────┐
                    │            Client               │
                    │   Next.js 16 (App Router)       │
                    │   TanStack Query + dnd-kit      │
                    └───────────────┬─────────────────┘
                                    │
               ┌────────────────────┴─────────────────────┐
               │ REST API (HTTPS)                         │ Socket.IO (WSS)
               ▼                                          ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                      NestJS API (apps/api)                  │
    │  ┌───────────────┐ ┌────────────────┐ ┌──────────────────┐  │
    │  │  Auth Module  │ │ Workspace Mod  │ │ Project/Task Mod │  │
    │  └───────┬───────┘ └───────┬────────┘ └────────┬─────────┘  │
    │          │                 │                   │            │
    │          └─────────────────┼───────────────────┘            │
    │                            ▼                                │
    │                     Prisma ORM Layer                        │
    └──────────────┬─────────────┬────────────────┬───────────────┘
                   │             │                │
                   ▼             ▼                ▼
             PostgreSQL 16     Redis 7          MinIO S3
             (Primary DB)   (Cache/Adapter)  (Object Storage)
                                 │                ▲
                                 ▼                │
                              BullMQ              │
                           (Job Queue)            │ Direct Presigned
                                 │                │ Uploads
                                 ▼                │
                         apps/worker Node Process ┘
                         (Streaming Excel & Jobs)
```

## 2. Key Subsystems & Architectural Choices

### 2.1 Backend: Modular Monolith (`apps/api`)
- **Framework**: NestJS (TypeScript).
- **Justification**: Provides enterprise-grade dependency injection, module boundaries, explicit decorators, middleware, guards, interceptors, and exception filters. Modules are strictly isolated so they can be extracted into microservices in the future with minimal friction.
- **API Style**: RESTful JSON API with OpenAPI (Swagger) specifications + WebSocket gateway for realtime events.

### 2.2 Data Layer: PostgreSQL 16 + Prisma ORM
- **Database Engine**: PostgreSQL 16 (Relational ACID database).
- **ORM**: Prisma ORM for type-safe query generation, automated schema migrations, and relational integrity.
- **Indexing Strategy**: B-Tree indexes on all foreign keys (`workspaceId`, `projectId`, `userId`) and frequently queried composite fields (`[projectId, status, position]`).

### 2.3 Realtime Engine: Socket.IO + Redis Multi-Node Adapter
- **Protocol**: WebSockets (with HTTP long-polling fallback).
- **Room Strategy**: Isolated rooms by project (`project:${projectId}`). Only members with verified project access can join.
- **Horizontal Scaling**: Socket.IO Redis Adapter fans out events across multiple API instances via Redis Pub/Sub channels.

### 2.4 Asynchronous Worker: BullMQ (`apps/worker`)
- **Queue Engine**: BullMQ on top of Redis.
- **Responsibilities**: Heavy asynchronous tasks offloaded from API:
  - Email & in-app notifications dispatch.
  - Streaming Excel generation (500k rows).
  - Bulk task import parsing and batch database inserts.
  - Periodic cleanup and analytics aggregation.
- **Fault Tolerance**: Automatic retry with exponential backoff and Dead Letter Queue (DLQ).

### 2.5 Object Storage: MinIO (S3-Compatible)
- **Direct-to-S3 Upload Pattern**: Browser requests a presigned PUT URL from API -> Browser uploads directly to MinIO -> Browser notifies API with file metadata.
- **Advantage**: API server is never bottlenecked by large binary uploads; Node.js memory footprint remains completely stable.

### 2.6 Frontend: Next.js 16 App Router (`apps/web`)
- **State Management**:
  - Server state & caching: **TanStack Query (React Query)** with optimistic updates.
  - Client/UI state: React local state & **Zustand** when cross-component state is needed.
- **Drag-and-Drop**: `dnd-kit` for accessible, 60fps Kanban board interactions with fractional positioning.
- **Styling**: Tailwind CSS + `shadcn/ui` component primitives.


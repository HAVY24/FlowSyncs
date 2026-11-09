import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class HealthService {
    constructor(private readonly prisma: PrismaService) { }

    async checkHealth() {
        const uptimeSeconds = process.uptime();
        let dbStatus = 'disconnected';
        let dbError = null;

        try {
            await this.prisma.$queryRaw`SELECT 1`;
            dbStatus = 'connected';
        } catch (error: any) {
            dbError = error.message;
        }

        return {
            status: dbStatus === 'connected' ? 'ok' : 'degraded',
            uptime: `${uptimeSeconds.toFixed(2)}s`,
            timestamp: new Date().toISOString(),
            database: {
                status: dbStatus,
                name: 'flowsync_db',
                ...(dbError && { error: dbError }),
            },
        };
    }
}


import { Injectable } from "@nestjs/common";
import { Pool } from "pg";

@Injectable()
export class HealthService {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString:
                process.env.DATABASE_URL,
        });
    }

    async checkHealth() {
        const uptimeSeconds = process.uptime();
        let dbStatus = 'disconnected';
        let dbError = null;

        try {
            await this.pool.query('SELECT 1');
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


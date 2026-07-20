
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

function parseDatabaseUrl(raw: string | undefined) {
    if (!raw) {
        throw new Error("DATABASE_URL is not set. Add it to your .env file.");
    }

    // URL handles every edge case the split() chain breaks on:
    // no password, encoded characters, ports, and ?query params.
    const url = new URL(raw);

    return {
        host: url.hostname || "localhost",
        port: url.port ? Number(url.port) : 3306,
        user: decodeURIComponent(url.username || "root"),
        // Empty string when the URL has no password (passwordless local root).
        password: decodeURIComponent(url.password || ""),
        // pathname is "/blog_db" -> strip the leading slash.
        database: url.pathname.replace(/^\//, ""),
    };
}

const config = parseDatabaseUrl(process.env.DATABASE_URL);

const adapter = new PrismaMariaDb({
    ...config,
    connectionLimit: 5,
});

// Singleton: reuse the same client (and its pool) across hot reloads in dev.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
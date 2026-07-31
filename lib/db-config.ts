// Single source of truth for database connection settings.
//
// Consumed by BOTH:
//   - lib/prisma.ts    (runtime — passes these straight to the MariaDB adapter)
//   - prisma.config.ts (CLI — needs them as a connection string)
//
// Discrete DB_* vars are preferred because their values are used verbatim:
// a password containing ? > ; @ / : # needs no percent-encoding. DATABASE_URL
// is still honoured as a fallback so existing deployments keep working.
//
// Intentionally dependency-free (no path aliases, no imports) — the Prisma CLI
// loads prisma.config.ts without tsconfig path-alias resolution.

export type DbConfig = {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    connectionLimit: number;
};

const DEFAULTS = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    connectionLimit: 5,
};

function fromDatabaseUrl(raw: string): Omit<DbConfig, "connectionLimit"> {
    let url: URL;
    try {
        url = new URL(raw);
    } catch {
        throw new Error(
            "DATABASE_URL could not be parsed. Special characters in the password " +
            "(? > ; @ / : #) must be percent-encoded — or better, use the discrete " +
            "DB_HOST / DB_PORT / DB_USER / DB_PASSWORD / DB_NAME variables instead."
        );
    }
    return {
        host: url.hostname || DEFAULTS.host,
        port: url.port ? Number(url.port) : DEFAULTS.port,
        user: decodeURIComponent(url.username) || DEFAULTS.user,
        password: decodeURIComponent(url.password),
        database: url.pathname.replace(/^\//, ""),
    };
}

export function getDbConfig(): DbConfig {
    const connectionLimit =
        Number(process.env.DB_CONNECTION_LIMIT) || DEFAULTS.connectionLimit;

    // Discrete vars win. DB_NAME is the marker that they've been configured,
    // since it's the only field with no sensible default.
    if (process.env.DB_NAME) {
        return {
            host: process.env.DB_HOST || DEFAULTS.host,
            port: Number(process.env.DB_PORT) || DEFAULTS.port,
            user: process.env.DB_USER || DEFAULTS.user,
            // ?? not || — an empty password is valid (passwordless local root).
            password: process.env.DB_PASSWORD ?? DEFAULTS.password,
            database: process.env.DB_NAME,
            connectionLimit,
        };
    }

    if (process.env.DATABASE_URL) {
        return { ...fromDatabaseUrl(process.env.DATABASE_URL), connectionLimit };
    }

    throw new Error(
        "No database configuration found. Set DB_NAME (plus DB_HOST / DB_PORT / " +
        "DB_USER / DB_PASSWORD) in your .env file, or provide DATABASE_URL."
    );
}

/** Connection string for the Prisma CLI, with every component safely encoded. */
export function buildDatabaseUrl(): string {
    const { host, port, user, password, database } = getDbConfig();
    const auth = password
        ? `${encodeURIComponent(user)}:${encodeURIComponent(password)}`
        : encodeURIComponent(user);
    return `mysql://${auth}@${host}:${port}/${encodeURIComponent(database)}`;
}

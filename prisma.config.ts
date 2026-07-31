
import "dotenv/config";
import { defineConfig } from "prisma/config";
import { buildDatabaseUrl } from "./lib/db-config";

// Built from the discrete DB_* vars (falling back to DATABASE_URL) so the CLI
// and the runtime client always target the same database, and so special
// characters in the password never have to be hand-encoded.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: buildDatabaseUrl(),
  },
});

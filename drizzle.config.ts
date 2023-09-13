import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/database/schema.ts",
  driver: 'turso',
  out: "./src/database/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
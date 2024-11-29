import "dotenv/config";  // This should be at the top to load .env variables
import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    out: "./drizzle",
    driver: "pg",  // Make sure you're using the correct driver for PostgreSQL
    dialect: "postgresql",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,  // Reference the DATABASE_URL directly
    },
} satisfies Config;

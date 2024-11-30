import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:p8mwVuUixqR6@ep-lingering-thunder-a1b8qei4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
  schema: "./db/schema.ts",
  schemaFilter: "public",
  tablesFilter: "*",
  introspect: {
    casing: "camel",
  },
  migrations: {
    table: "__drizzle_migrations__",
    schema: "public",
  },
  verbose: true,
});

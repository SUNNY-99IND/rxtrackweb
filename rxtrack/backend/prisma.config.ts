import "dotenv/config";
import { defineConfig, env } from "prisma/config";
import fs from "fs";
import path from "path";

const localSchema = path.resolve(__dirname, "./prisma/schema.prisma");
const schemaPath = fs.existsSync(localSchema) ? "./prisma/schema.prisma" : "../database/prisma/schema.prisma";

export default defineConfig({
  schema: schemaPath,

  migrations: {
    path: "../database/prisma/migrations",
    seed: "tsx ../database/prisma/seed.ts",
  },

  datasource: {
    url: env("DATABASE_URL"),
  },
});


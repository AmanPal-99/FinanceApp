import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    schema: "./utils/schema.jsx",
    dialect: "postgresql", 
    dbCredentials: {
        url: process.env.local.NEXT_PUBLIC_DATABASE_URL,
    },
});

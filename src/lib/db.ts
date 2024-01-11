import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const libsqlClient = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.AUTH_TOKEN,
});

export const db = drizzle(libsqlClient);

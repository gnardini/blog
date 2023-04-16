import { Knex, knex } from "knex";

let db: Knex;

// Don't add domain logic here, write features in different files.
// Add migrations on the src/server/db/migrations folder using Knex.
export async function getDb() {
  if (!db) {
    db = knex({
      client: "sqlite3",
      connection: {
        filename: "./data.db",
      },
    });

    console.info("Running Migrations");

    await db.migrate.latest({
      directory: "./dist/server/db/migrations",
      loadExtensions: [".js"],
    });

    console.info("Database initialized successfully");
  }

  return db;
}

import { Knex, knex } from "knex";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME,
  IS_DEV_MODE,
} from "../../config";

let db: Knex;

// Don't add domain logic here, write features in different files.
// Add migrations on the src/server/db/migrations folder using Knex.
export async function initDatabase(runMigrations = true) {
  if (!!db) {
    return;
  }

  if (!IS_DEV_MODE) {
    db = await doDbInitialization(false); // (runMigrations); // TODO: figure out how to run migrations on prod
    return;
  }

  // @ts-ignore
  if (global.db) {
    // @ts-ignore
    db = global.db;
    return;
  }

  db = await doDbInitialization(runMigrations);
  // @ts-ignore
  global.db = db;
}

async function doDbInitialization(runMigrations: boolean) {
  const newDb = knex({
    client: "pg",
    connection: {
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USERNAME,
      password: DB_PASSWORD,
    },
    pool: {
      min: 0,
      max: 20,
    },
  });

  if (runMigrations) {
    console.info("Running Migrations");

    await newDb.migrate.latest({
      directory: "./dist/src/server/db/migrations",
      loadExtensions: [".js"],
    });
  }

  console.info("Database initialized successfully");
  return newDb;
}

export async function getDatabase(): Promise<Knex> {
  if (!db) {
    await initDatabase();
  }
  return db;
}

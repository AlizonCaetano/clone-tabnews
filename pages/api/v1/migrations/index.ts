import { NextApiRequest, NextApiResponse } from "next";
import migrationsRunner, Direction from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database"
import { Client } from "pg";

export default async function migrations(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const dbClient = await database.getNewClient();

  const defaultMigrationsOptions: {
    dbClient: Client,
    dir: string,
    direction: Direction,
    verbose: boolean,
    migrationsTable: string,
  } = {
    dbClient: dbClient,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await migrationsRunner({
      ...defaultMigrationsOptions,
      dryRun: true,
    });
    await dbClient.end();

    response.status(200).json(pendingMigrations);
    return;
  }

  if (request.method === "POST") {
    const migratedMigrations = await migrationsRunner({
      ...defaultMigrationsOptions,
      dryRun: false,
    });
    await dbClient.end();


    if (migratedMigrations.length > 0) {
      response.status(201).json(migratedMigrations);
      return;
    }

    response.status(200).json(migratedMigrations);
    return;
  }

  response.status(405).end();
  return;
}

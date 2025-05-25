import database from "infra/database.ts";
import { NextApiRequest, NextApiResponse } from "next";

async function status(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const updatedAt = new Date().toISOString();

  const dbVersionResult = await database.query("SHOW server_version;");
  const dbVersionValue = dbVersionResult.rows[0].server_version;

  const dbMaxConnectionsResult = await database.query("SHOW max_connections;");
  const dbMaxConnectionsValue = dbMaxConnectionsResult.rows[0].max_connections;

  const dbOpenedConnectionsResult = await database.query("SELECT count(*)::int FROM pg_stat_activity;");
  const dbOpenedConnectionsValue = dbOpenedConnectionsResult.rows[0].count;

  console.log(dbOpenedConnectionsValue);

  response.status(200).json({
    update_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersionValue,
        max_connections: parseInt(dbMaxConnectionsValue),
        opened_connections: dbOpenedConnectionsValue
      },
    },
  });
}

export default status;

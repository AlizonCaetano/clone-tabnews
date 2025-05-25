import database from "infra/database.ts";
import { NextApiRequest, NextApiResponse } from "next";

async function status(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const updatedAt = new Date().toISOString();

  const dbVersionResult = await database.query("SHOW server_version;");
  const { server_version } = dbVersionResult.rows[0];

  const dbMaxConnectionsResult = await database.query("SHOW max_connections;");
  const { max_connections } = dbMaxConnectionsResult.rows[0];

  const dbOpenedConnectionsResult = await database.query("SELECT count(*)::int FROM pg_stat_activity;");
  const { count } = dbOpenedConnectionsResult.rows[0];

  console.log(count);

  response.status(200).json({
    update_at: updatedAt,
    dependencies: {
      database: {
        version: server_version,
        max_connections: parseInt(max_connections),
        opened_connections: count
      },
    },
  });
}

export default status;

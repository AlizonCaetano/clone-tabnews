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

  response.status(200).json({
    update_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersionValue,
        max_connections: parseInt(dbMaxConnectionsValue),
      },
    },
  });
}

export default status;

import database from "infra/database.ts";
import { NextApiRequest, NextApiResponse } from "next";

async function status(request: NextApiRequest, response: NextApiResponse): Promise<void> {
  const updatedAt = new Date().toISOString();
  
  const dbVersionResult = await database.query("SHOW server_version;");
  const dbVersionValue = dbVersionResult.rows[0].server_version;

  // const dbMaxConn = await database.query("SHOW max_connections;");
  // const dbOpenedConn = await database.query("SELECT count(*) FROM pg_stat_activity;");

  response.status(200).json({
    update_at: updatedAt,
    dependencies: { 
        database: {
          version: dbVersionValue,
        },
    }
  });
}

export default status;

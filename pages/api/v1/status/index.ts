import database from "infra/database.ts";
import { NextApiRequest, NextApiResponse } from "next";

async function status(request: NextApiRequest, response: NextApiResponse): Promise<void> {
  const updatedAt = new Date().toISOString();
  const dbVersion = await database.query("SHOW server_version;");
  const dbMaxConn = await database.query("SHOW max_connections;");
  const dbOpenedConn = await database.query("SELECT count(*) FROM pg_stat_activity;");

  response.status(200).json({
    update_at: updatedAt,
    db_version: dbVersion,
    db_max_conn: dbMaxConn,
    db_opened_conn: dbOpenedConn,
  });
}

export default status;

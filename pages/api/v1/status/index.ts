import database from "../../../../infra/database.ts";
import { NextApiRequest, NextApiResponse } from "next";

type StatusResponse = {
  chave: String;
};

async function status(request: NextApiRequest, response: NextApiResponse<StatusResponse>): void {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.rows);
  
  response.status(200).json({ chave: "valor" });
}

export default status;

import { NextApiRequest, NextApiResponse } from "next";

type StatusResponse = {
  chave: String;
};

function status(request: NextApiRequest, response: NextApiResponse<StatusResponse>): void {
  response.status(200).json({ chave: "valor" });
}

export default status;

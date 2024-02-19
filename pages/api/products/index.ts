// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      data: any[];
      pagination: any;
    }
  | { name: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "GET") return res.status(404).json({ name: "method not supported" });

  const response = await fetch("https://6580118d6ae0629a3f544205.mockapi.io/v1/posts");
  const resJSON = await response.json();
  res.status(200).json(resJSON);
}

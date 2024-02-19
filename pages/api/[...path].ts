// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from "http-proxy";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

var proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // overwrite cookie
  req.headers.cookies = "";

  proxy.web(req, res, { target: process.env.API_URL, changeOrigin: true, selfHandleResponse: false });
  // proxy.web(req, res, { target: "https://js-post-api.herokuapp.com", changeOrigin: true, selfHandleResponse: false });

  // res.status(200).json({ name: "PATH - Match all here" });
}

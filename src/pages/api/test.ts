import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);
  return res.status(200).json({ name: "miggy" });
};

export default handler;

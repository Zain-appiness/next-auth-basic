import { getServerSession } from "next-auth/next";
import authOptions from "./auth";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  res.status(200).json({ session });
}

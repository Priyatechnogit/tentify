import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "../../../db/connect";
import Waitlist from "../../../db/models/Waitlist";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const { tentId } = request.body;

  await dbConnect();

  try {
    const existingEntry = await Waitlist.findOne({
      tentId,
      owner: session.user.name,
    });

    if (existingEntry) {
      return response
        .status(409)
        .json({ message: "You have already joined this waitlist" });
    }

    const newEntry = await Waitlist.create({
      tentId,
      owner: session.user.name,
    });

    return response.status(201).json(newEntry);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Failed to join waitlist" });
  }
}

import connectToDatabase from "../../../db/connect";
import Tent from "../../../db/models/Tent";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }
  try {
    await connectToDatabase();
    const tents = await Tent.find({});
    response.status(200).json(tents);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to fetch tents", error: error.message });
  }
}

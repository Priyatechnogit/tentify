import connectToDatabase from "../../../db/connect";
import Tent from "../../../db/models/Tent";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const { id } = request.query;

  try {
    await connectToDatabase();
    const tent = await Tent.findById(id);

    if (!tent) {
      return response.status(404).json({ message: "Tent not found" });
    }

    response.status(200).json(tent);
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch tent" });
  }
}

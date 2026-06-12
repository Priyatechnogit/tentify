import connectToDatabase from "../../../db/connect";
import Booking from "../../../db/models/Booking";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const { id } = request.query;

  try {
    await connectToDatabase();
    const booking = await Booking.findById(id).populate("tentId");
    if (!booking) {
      return response.status(404).json({ message: "Booking not found" });
    }

    return response.status(200).json(booking);
  } catch (error) {
    return response.status(500).json({ message: "Failed to fetch booking" });
  }
}

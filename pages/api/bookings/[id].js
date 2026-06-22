import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import connectToDatabase from "../../../db/connect";
import Booking from "../../../db/models/Booking";
import Tent from "../../../db/models/Tent";

export default async function handler(request, response) {
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      await connectToDatabase();
      const booking = await Booking.findById(id).populate("tentId");
      if (!booking) {
        return response.status(404).json({ message: "Booking not found" });
      }

      return response.status(200).json(booking);
    } catch (error) {
      console.error("Failed to fetch booking:", error);
      return response.status(500).json({ message: "Failed to fetch booking" });
    }
  }
  if (request.method === "DELETE") {
    const session = await getServerSession(request, response, authOptions);

    if (!session) {
      return response.status(401).json({ message: "Not authenticated" });
    }

    try {
      await connectToDatabase();
      const booking = await Booking.findById(id);

      if (!booking) {
        return response.status(404).json({ message: "Booking not found" });
      }

      if (booking.owner && booking.owner !== session.user.email) {
        return response.status(403).json({ message: "Not authorized" });
      }
      const tentId = booking.tentId;

      await Booking.findByIdAndDelete(id);

      const remainingBookings = await Booking.countDocuments({ tentId });

      if (remainingBookings === 0) {
        await Tent.findByIdAndUpdate(tentId, { isAvailable: true });
      }

      return response
        .status(200)
        .json({ message: "Booking cancelled successfully" });
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      return response.status(500).json({ message: "Failed to cancel booking" });
    }
  }
  return response.status(405).json({ message: "Method not allowed" });
}

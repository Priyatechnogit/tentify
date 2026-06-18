import connectToDatabase from "../../../db/connect";
import Booking from "../../../db/models/Booking";

export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      await connectToDatabase();
      const bookings = await Booking.find({})
        .populate("tentId")
        .sort({ date: 1 });
      return response.status(200).json(bookings);
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      return response.status(500).json({ message: "Failed to fetch bookings" });
    }
  }

  if (request.method === "POST") {
    const { tentId, date, timeSlot, numberOfGuests, totalPrice } = request.body;

    if (
      !tentId ||
      !date ||
      !timeSlot ||
      !numberOfGuests ||
      totalPrice == null
    ) {
      return response.status(400).json({ message: "All fields are required" });
    }

    try {
      await connectToDatabase();
      const newBooking = await Booking.create({
        tentId,
        date,
        timeSlot,
        numberOfGuests,
        totalPrice,
      });
      return response.status(201).json(newBooking);
    } catch (error) {
      console.error("Failed to save booking:", error);
      return response.status(500).json({ message: "Failed to save booking" });
    }
  }
  return response.status(405).json({ message: "Method not allowed" });
}

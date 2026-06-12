import connectToDatabase from "../../../db/connect";
import Booking from "../../../db/models/Booking";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const { tentId, date, timeSlot, numberOfGuests, totalPrice } = request.body;

  if (!tentId || !date || !timeSlot || !numberOfGuests || !totalPrice) {
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
    return response.status(500).json({ message: "Failed to save booking" });
  }
}

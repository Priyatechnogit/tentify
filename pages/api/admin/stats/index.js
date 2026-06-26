import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import dbConnect from "../../../../db/connect";
import Booking from "../../../../db/models/Booking";

const ADMIN_USERNAME = "Priyatechnogit";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(request, response, authOptions);

  if (!session || session.user.name !== ADMIN_USERNAME) {
    return response.status(403).json({ message: "Forbidden" });
  }

  await dbConnect();

  try {
    const bookings = await Booking.find();

    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce(
      (sum, booking) => sum + booking.totalPrice,
      0
    );

    return response.status(200).json({ totalBookings, totalRevenue });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Failed to fetch stats" });
  }
}

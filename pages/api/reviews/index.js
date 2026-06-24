import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";
import Booking from "../../../db/models/Booking";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const { tentId, bookingId, rating, comment } = request.body;

  await dbConnect();

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return response.status(404).json({ message: "Booking not found" });
    }

    if (booking.owner !== session.user.name) {
      return response.status(403).json({ message: "Forbidden" });
    }
    const existingReview = await Review.findOne({ bookingId });
    if (existingReview) {
      return response
        .status(409)
        .json({ message: "You have already reviewed this booking" });
    }

    const newReview = await Review.create({
      tentId,
      bookingId,
      owner: session.user.name,
      rating,
      comment,
    });

    return response.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Failed to submit review" });
  }
}

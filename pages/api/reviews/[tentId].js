import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const { tentId } = request.query;

  await dbConnect();

  try {
    const reviews = await Review.find({ tentId }).sort({ createdAt: -1 });
    return response.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Failed to fetch reviews" });
  }
}

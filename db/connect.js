import mongoose from "mongoose";

export default async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(process.env.MONGODB_URI);
}

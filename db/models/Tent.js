import mongoose, { Mongoose } from "mongoose";

const TentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Indoor", "Outdoor"],
    required: true,
  },
  brewery: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  pricePerPerson: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Tent || mongoose.model("Tent", TentSchema);

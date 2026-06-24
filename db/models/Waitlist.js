import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    tentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tent",
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Waitlist =
  mongoose.models.Waitlist || mongoose.model("Waitlist", waitlistSchema);

export default Waitlist;

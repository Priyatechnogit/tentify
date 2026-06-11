import mongoose from "mongoose";
import connectToDatabase from "../connect.js";
import Tent from "../models/Tent.js";

const tents = [
  {
    name: "Hofbräu Festzelt",
    description:
      "The legendary Hofbräu Festzelt offers an authentic Oktoberfest experience with traditional Bavarian music, festive vibes, and plenty of beer!",
    category: "Indoor",
    brewery: "Hofbräuhaus München",
    capacity: 800,
    image: "/images/tents/hofbrau-festzelt.webp",
    isAvailable: true,
    pricePerPerson: 49,
  },
  {
    name: "Wiesn Garten",
    description:
      "Enjoy the fresh air and lively atmosphere of the Wiesn Garten. Perfect for those who prefer an outdoor experience with great beer and food.",
    category: "Outdoor",
    brewery: "Augustiner-Bräu",
    capacity: 600,
    image: "/images/tents/wiesn-garten.png",
    isAvailable: true,
    pricePerPerson: 39,
  },
  {
    name: "Schottenhamel Festhalle",
    description:
      "One of the most traditional tents at Oktoberfest. The Schottenhamel is where the Mayor of Munich taps the first keg to officially open the festival.",
    category: "Indoor",
    brewery: "Spaten-Franziskaner-Bräu",
    capacity: 1000,
    image: "/images/tents/schottenhamel-festhalle.png",
    isAvailable: false,
    pricePerPerson: 55,
  },
  {
    name: "Paulaner Festzelt",
    description:
      "The Paulaner Festzelt is known for its warm atmosphere and excellent Paulaner beer. A favourite among locals and tourists alike.",
    category: "Indoor",
    brewery: "Paulaner Brauerei",
    capacity: 850,
    image: "/images/tents/paulaner-festzelt.webp",
    isAvailable: true,
    pricePerPerson: 49,
  },
  {
    name: "Augustiner Festhalle",
    description:
      "The Augustiner Festhalle is one of the most sought-after tents at Oktoberfest, serving the beloved Augustiner beer straight from wooden barrels.",
    category: "Indoor",
    brewery: "Augustiner-Bräu",
    capacity: 900,
    image: "/images/tents/augustiner-festhalle.webp",
    isAvailable: true,
    pricePerPerson: 52,
  },
  {
    name: "Löwenbräu Festzelt",
    description:
      "Famous for its iconic lion statue at the entrance, the Löwenbräu Festzelt is a lively tent with great music and the finest Löwenbräu beer.",
    category: "Indoor",
    brewery: "Löwenbräu",
    capacity: 750,
    image: "/images/tents/lowenbrau-festzelt.jpg",
    isAvailable: true,
    pricePerPerson: 47,
  },
];

async function seedDatabase() {
  try {
    await connectToDatabase();
    await Tent.deleteMany({});
    console.log("Cleared existing tents");

    await Tent.insertMany(tents);
    console.log(`Successfully seeded ${tents.length} tents`);

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seedDatabase();

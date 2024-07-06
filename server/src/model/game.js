import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Img: { type: String, required: true },
    Category: { type: String, required: true },
    Price: { type: Number, required: true },
    Quantity: { type: Number, required: true },
  },
  { collection: "cart", timestamps: true }
);
const Games = mongoose.model("game", gameSchema, "games");

export default Games;

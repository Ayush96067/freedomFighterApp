import mongoose from "mongoose";

const FighterSchema = mongoose.Schema({
  name: String,
  title: String,
  category: String,
  image: String,
});

const Fighter = mongoose.model("Fighter", FighterSchema);

export default Fighter;

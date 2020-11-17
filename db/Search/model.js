import mongoose, { Schema } from "mongoose";

const searchSchema = new Schema(
  { string: String },
  { capped: { size: 10000, max: 150 } }
);

const SearchModel =
  mongoose.models.Search || mongoose.model("Search", searchSchema);

export default SearchModel;

import mongoose, { Schema } from "mongoose";

const searchSchema = new Schema(
  { string: String },
  { capped: { size: 12750, max: 250 } }
);

const SearchModel =
  mongoose.models.Search || mongoose.model("Search", searchSchema);

export default SearchModel;

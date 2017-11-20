const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  username: String,
  content: String,
  rank: {
    type: Number,
    enum : [1, 2, 3, 4, 5],
    default : 3
  },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

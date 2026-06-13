const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MovieInfo",
      required: [true, "Movie ID is required"],
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },

    reviewTitle: {
      type: String,
      required: [true, "Review title is required"],
      trim: true,
      minlength: [3, "Review title must be at least 3 characters"],
      maxlength: [100, "Review title cannot exceed 100 characters"],
    },

    reviewText: {
      type: String,
      required: [true, "Review text is required"],
      trim: true,
      minlength: [10, "Review text must be at least 10 characters"],
      maxlength: [1000, "Review text cannot exceed 1000 characters"],
    },

    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot be more than 5"],
    },

    reviewDate: {
      type: Date,
      default: Date.now,
    },

    recommended: {
      type: Boolean,
      default: true,
    },

    likes: {
      type: Number,
      default: 0,
      min: [0, "Likes cannot be negative"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Review", reviewSchema);

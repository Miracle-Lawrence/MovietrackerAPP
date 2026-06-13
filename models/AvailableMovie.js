const mongoose = require("mongoose");

const availableMovieSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MovieInfo",
      required: [true, "Movie ID is required"],
    },

    totalCopies: {
      type: Number,
      required: [true, "Total copies is required"],
      min: [0, "Total copies cannot be negative"],
    },

    availableCopies: {
      type: Number,
      required: [true, "Available copies is required"],
      min: [0, "Available copies cannot be negative"],
    },

    reservedCopies: {
      type: Number,
      default: 0,
      min: [0, "Reserved copies cannot be negative"],
    },

    shelfLocation: {
      type: String,
      required: [true, "Shelf location is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: {
        values: ["available", "low stock", "out of stock"],
        message: "Status must be available, low stock, or out of stock",
      },
      default: "available",
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("AvailableMovie", availableMovieSchema);

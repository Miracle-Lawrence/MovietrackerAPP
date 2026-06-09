const mongoose = require("mongoose");

const rentedMovieSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },

    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MovieInfo",
      required: [true, "Movie ID is required"],
    },

    dateRented: {
      type: Date,
      default: Date.now,
    },

    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
      validate: {
        validator: function (value) {
          return value >= this.dateRented;
        },
        message: "Due date cannot be before rental date",
      },
    },

    dateReturned: {
      type: Date,
      default: null,
    },

    rentalFee: {
      type: Number,
      required: [true, "Rental fee is required"],
      min: [0, "Rental fee cannot be negative"],
    },

    lateFee: {
      type: Number,
      min: [0, "Late fee cannot be negative"],
      default: 0,
    },

    paymentStatus: {
      type: String,
      enum: {
        values: ["paid", "unpaid"],
        message: "Payment status must be paid or unpaid",
      },
      default: "unpaid",
    },

    out: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("RentedMovie", rentedMovieSchema);

const mongoose = require("mongoose");

const movieInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Movie title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    director: {
      type: String,
      required: [true, "Director is required"],
      trim: true,
      minlength: [2, "Director name must be at least 2 characters"],
    },

    releaseYear: {
      type: Number,
      required: [true, "Release year is required"],
      min: [1888, "Release year cannot be before 1888"],
      max: [new Date().getFullYear(), "Release year cannot be in the future"],
    },

    genre: {
      type: String,
      required: [true, "Genre is required"],
      trim: true,
    },

    mainActors: {
      type: [String],
      required: [true, "Main actors are required"],
      validate: {
        validator: function (actors) {
          return actors.length >= 1;
        },
        message: "At least one main actor is required",
      },
    },

    lengthMinutes: {
      type: Number,
      required: [true, "Movie length is required"],
      min: [1, "Movie length must be at least 1 minute"],
    },

    studio: {
      type: String,
      required: [true, "Studio is required"],
      trim: true,
    },

    language: {
      type: String,
      required: [true, "Language is required"],
      trim: true,
      default: "English",
    },

    ageRating: {
      type: String,
      required: [true, "Age rating is required"],
      enum: {
        values: ["G", "PG", "PG-13", "R", "NC-17"],
        message: "Age rating must be G, PG, PG-13, R, or NC-17",
      },
    },

    availableCopies: {
      type: Number,
      required: [true, "Available copies is required"],
      min: [0, "Available copies cannot be negative"],
      default: 1,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("MovieInfo", movieInfoSchema);

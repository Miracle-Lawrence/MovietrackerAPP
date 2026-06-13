const AvailableMovie = require("../models/AvailableMovie");

const getAllAvailableMovies = async (req, res) => {
  try {
    const availableMovies = await AvailableMovie.find().populate("movieId");

    res.status(200).json(availableMovies);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve available movies",
      error: error.message,
    });
  }
};

const getAvailableMovieById = async (req, res) => {
  try {
    const availableMovie = await AvailableMovie.findById(
      req.params.id,
    ).populate("movieId");

    if (!availableMovie) {
      return res.status(404).json({
        message: "Available movie not found",
      });
    }

    res.status(200).json(availableMovie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve available movie",
      error: error.message,
    });
  }
};

const createAvailableMovie = async (req, res) => {
  try {
    const availableMovie = new AvailableMovie(req.body);

    const savedAvailableMovie = await availableMovie.save();

    res.status(201).json(savedAvailableMovie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create available movie",
      error: error.message,
    });
  }
};

const updateAvailableMovie = async (req, res) => {
  try {
    const updatedAvailableMovie = await AvailableMovie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedAvailableMovie) {
      return res.status(404).json({
        message: "Available movie not found",
      });
    }

    res.status(200).json(updatedAvailableMovie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update available movie",
      error: error.message,
    });
  }
};

const deleteAvailableMovie = async (req, res) => {
  try {
    const deletedAvailableMovie = await AvailableMovie.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedAvailableMovie) {
      return res.status(404).json({
        message: "Available movie not found",
      });
    }

    res.status(200).json({
      message: "Available movie deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete available movie",
      error: error.message,
    });
  }
};

module.exports = {
  getAllAvailableMovies,
  getAvailableMovieById,
  createAvailableMovie,
  updateAvailableMovie,
  deleteAvailableMovie,
};

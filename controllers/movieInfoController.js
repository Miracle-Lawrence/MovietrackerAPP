const MovieInfo = require("../models/MovieInfo");

const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieInfo.find();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve movies",
      error: error.message,
    });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await MovieInfo.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve movie",
      error: error.message,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = new MovieInfo(req.body);

    const savedMovie = await movie.save();

    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create movie",
      error: error.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await MovieInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedMovie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update movie",
      error: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await MovieInfo.findByIdAndDelete(req.params.id);

    if (!deletedMovie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json({
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete movie",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};

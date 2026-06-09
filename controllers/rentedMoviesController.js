const RentedMovie = require("../models/RentedMovie");

const getAllRentals = async (req, res) => {
  try {
    const rentals = await RentedMovie.find()
      .populate("userId")
      .populate("movieId");

    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve rentals",
      error: error.message,
    });
  }
};

const getRentalById = async (req, res) => {
  try {
    const rental = await RentedMovie.findById(req.params.id)
      .populate("userId")
      .populate("movieId");

    if (!rental) {
      return res.status(404).json({
        message: "Rental record not found",
      });
    }

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve rental",
      error: error.message,
    });
  }
};

const createRental = async (req, res) => {
  try {
    const rental = new RentedMovie(req.body);

    const savedRental = await rental.save();

    res.status(201).json(savedRental);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create rental",
      error: error.message,
    });
  }
};

const updateRental = async (req, res) => {
  try {
    const updatedRental = await RentedMovie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!updatedRental) {
      return res.status(404).json({
        message: "Rental record not found",
      });
    }

    res.status(200).json(updatedRental);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update rental",
      error: error.message,
    });
  }
};

const deleteRental = async (req, res) => {
  try {
    const deletedRental = await RentedMovie.findByIdAndDelete(req.params.id);

    if (!deletedRental) {
      return res.status(404).json({
        message: "Rental record not found",
      });
    }

    res.status(200).json({
      message: "Rental deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete rental",
      error: error.message,
    });
  }
};

module.exports = {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
};

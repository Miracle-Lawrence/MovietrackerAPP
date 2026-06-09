/**
 * @swagger
 * tags:
 *   name: Movie Information
 *   description: Movie information routes
 */

/**
 * @swagger
 * /info:
 *   get:
 *     summary: Get all movie information
 *     tags: [Movie Information]
 *     responses:
 *       200:
 *         description: List of movies
 */

/**
 * @swagger
 * /info/{id}:
 *   get:
 *     summary: Get movie information by ID
 *     tags: [Movie Information]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 */

/**
 * @swagger
 * /info:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movie Information]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: The Godfather
 *               director: Francis Ford Coppola
 *               releaseYear: 1972
 *               genre: Crime, Drama
 *               mainActors:
 *                 - Marlon Brando
 *                 - Al Pacino
 *               lengthMinutes: 175
 *               studio: Paramount Pictures
 *               language: English
 *               ageRating: R
 *               availableCopies: 10
 *     responses:
 *       201:
 *         description: Movie created successfully
 */

/**
 * @swagger
 * /info/{id}:
 *   put:
 *     summary: Update movie by ID
 *     tags: [Movie Information]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: The Godfather Part II
 *               director: Francis Ford Coppola
 *               releaseYear: 1974
 *               genre: Crime, Drama
 *               mainActors:
 *                 - Al Pacino
 *                 - Robert De Niro
 *               lengthMinutes: 202
 *               studio: Paramount Pictures
 *               language: English
 *               ageRating: R
 *               availableCopies: 8
 *     responses:
 *       200:
 *         description: Movie updated successfully
 */

/**
 * @swagger
 * /info/{id}:
 *   delete:
 *     summary: Delete movie by ID
 *     tags: [Movie Information]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 */

const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieInfoController");

const isAuthenticated = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getAllMovies);
router.get("/:id", validateObjectId, getMovieById);
router.post("/", isAuthenticated, createMovie);
router.put("/:id", isAuthenticated, validateObjectId, updateMovie);
router.delete("/:id", isAuthenticated, validateObjectId, deleteMovie);

module.exports = router;

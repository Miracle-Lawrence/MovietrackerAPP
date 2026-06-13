/**
 * @swagger
 * tags:
 *   name: Available Movies
 *   description: Available movie inventory routes
 */

/**
 * @swagger
 * /available:
 *   get:
 *     summary: Get all available movies
 *     tags: [Available Movies]
 *     responses:
 *       200:
 *         description: List of available movies
 */

/**
 * @swagger
 * /available/{id}:
 *   get:
 *     summary: Get available movie by ID
 *     tags: [Available Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Available movie found
 */

/**
 * @swagger
 * /available:
 *   post:
 *     summary: Create available movie record
 *     tags: [Available Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               movieId: 665f1c2a6f1d2b0098765432
 *               totalCopies: 10
 *               availableCopies: 7
 *               reservedCopies: 2
 *               shelfLocation: Section A - Row 3
 *               status: available
 *               notes: Popular movie
 *     responses:
 *       201:
 *         description: Available movie created successfully
 */

/**
 * @swagger
 * /available/{id}:
 *   put:
 *     summary: Update available movie by ID
 *     tags: [Available Movies]
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
 *               movieId: 665f1c2a6f1d2b0098765432
 *               totalCopies: 10
 *               availableCopies: 5
 *               reservedCopies: 3
 *               shelfLocation: Section B - Row 1
 *               status: low stock
 *               notes: Updated inventory
 *     responses:
 *       200:
 *         description: Available movie updated successfully
 *   delete:
 *     summary: Delete available movie by ID
 *     tags: [Available Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Available movie deleted successfully
 */

const express = require("express");
const router = express.Router();

const {
  getAllAvailableMovies,
  getAvailableMovieById,
  createAvailableMovie,
  updateAvailableMovie,
  deleteAvailableMovie,
} = require("../controllers/availableMoviesController");

const isAuthenticated = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getAllAvailableMovies);
router.get("/:id", validateObjectId, getAvailableMovieById);
router.post("/", isAuthenticated, createAvailableMovie);
router.put("/:id", validateObjectId, isAuthenticated, updateAvailableMovie);
router.delete("/:id", validateObjectId, isAuthenticated, deleteAvailableMovie);

module.exports = router;

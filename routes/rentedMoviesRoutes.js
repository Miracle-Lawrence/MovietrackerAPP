/**
 * @swagger
 * tags:
 *   name: Rented Movies
 *   description: Rented movie routes
 */

/**
 * @swagger
 * /rented:
 *   get:
 *     summary: Get all rented movies
 *     tags: [Rented Movies]
 *     responses:
 *       200:
 *         description: List of rented movies
 */

/**
 * @swagger
 * /rented/{id}:
 *   get:
 *     summary: Get rented movie by ID
 *     tags: [Rented Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rented movie found
 */

/**
 * @swagger
 * /rented:
 *   post:
 *     summary: Create a rented movie record
 *     tags: [Rented Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               userId: 665f1c2a6f1d2b0012345678
 *               movieId: 665f1c2a6f1d2b0098765432
 *               dueDate: 2026-06-20
 *               rentalFee: 1500
 *               lateFee: 0
 *               paymentStatus: paid
 *               out: true
 *     responses:
 *       201:
 *         description: Rented movie record created
 */

/**
 * @swagger
 * /rented/{id}:
 *   put:
 *     summary: Update rented movie by ID
 *     tags: [Rented Movies]
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
 *               userId: 665f1c2a6f1d2b0012345678
 *               movieId: 665f1c2a6f1d2b0098765432
 *               dueDate: 2026-06-20
 *               dateReturned: 2026-06-18
 *               rentalFee: 1500
 *               lateFee: 0
 *               paymentStatus: paid
 *               out: false
 *     responses:
 *       200:
 *         description: Rented movie updated successfully
 */
 
 /**
 * @swagger
 * /rented:
 *   delete:
 *     summary: Delete rented movie by ID
 *     tags: [Rented Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rented movie deleted
 */

const express = require("express");
const router = express.Router();

const {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
} = require("../controllers/rentedMoviesController");

const isAuthenticated = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getAllRentals);
router.get("/:id", validateObjectId, getRentalById);
router.post("/", isAuthenticated, createRental);
router.put("/:id", isAuthenticated, validateObjectId, updateRental);
router.delete("/:id", isAuthenticated, validateObjectId, deleteRental);

module.exports = router;

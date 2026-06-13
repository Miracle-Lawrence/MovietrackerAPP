/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Movie review routes
 */

/**
 * @swagger
 * /review:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: List of all reviews
 */

/**
 * @swagger
 * /review/{id}:
 *   get:
 *     summary: Get review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review found
 */

/**
 * @swagger
 * /review:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               movieId: 665f1c2a6f1d2b0098765432
 *               userId: 665f1c2a6f1d2b0012345678
 *               reviewTitle: Great movie
 *               reviewText: This movie was very interesting and well acted.
 *               rating: 5
 *               recommended: true
 *               likes: 0
 *     responses:
 *       201:
 *         description: Review created successfully
 */

/**
 * @swagger
 * /review/{id}:
 *   put:
 *     summary: Update review by ID
 *     tags: [Reviews]
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
 *               userId: 665f1c2a6f1d2b0012345678
 *               reviewTitle: Updated review
 *               reviewText: This updated review explains the movie better.
 *               rating: 4
 *               recommended: true
 *               likes: 2
 *     responses:
 *       200:
 *         description: Review updated successfully
 *   delete:
 *     summary: Delete review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully
 */

const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewsController");

const isAuthenticated = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getAllReviews);
router.get("/:id", validateObjectId, getReviewById);
router.post("/", isAuthenticated, createReview);
router.put("/:id", validateObjectId, isAuthenticated, updateReview);
router.delete("/:id", validateObjectId, isAuthenticated, deleteReview);

module.exports = router;

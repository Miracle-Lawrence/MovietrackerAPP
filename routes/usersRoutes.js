/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management routes
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               firstName: Miracle
 *               lastName: Lawrence
 *               email: miracle@example.com
 *               phone: "08012345678"
 *               address: Lagos, Nigeria
 *               membershipType: premium
 *               active: true
 *     responses:
 *       201:
 *         description: User created
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
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
 *               firstName: Miracle
 *               lastName: Lawrence
 *               email: miracleupdated@example.com
 *               phone: "08098765432"
 *               address: Abuja, Nigeria
 *               membershipType: vip
 *               active: true
 *     responses:
 *       200:
 *         description: User updated successfully
 */
  
 /**
 * @swagger
 * /users:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */

const express = require("express");
const router = express.Router();


const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");


const isAuthenticated = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getAllUsers);
router.get("/:id", validateObjectId, getUserById);
router.post("/", isAuthenticated, createUser);
router.put("/:id", isAuthenticated, validateObjectId, updateUser);
router.delete("/:id", isAuthenticated, validateObjectId, deleteUser);

module.exports = router;

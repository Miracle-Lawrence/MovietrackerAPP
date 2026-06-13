const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const swaggerUi = require("swagger-ui-express");

dotenv.config();

require("./config/passport");

const swaggerSpec = require("./swagger");

const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");
const movieInfoRoutes = require("./routes/movieInfoRoutes");
const rentedMoviesRoutes = require("./routes/rentedMoviesRoutes");
const reviewsRoutes = require("./routes/reviewsRoutes");
const availableMoviesRoutes = require("./routes/availableMoviesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "testsecret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Movie Rental Tracker API is running");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/info", movieInfoRoutes);
app.use("/rented", rentedMoviesRoutes);
app.use("/review", reviewsRoutes);
app.use("/available", availableMoviesRoutes);

module.exports = app;

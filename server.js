const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const swaggerUi = require("swagger-ui-express");

const connectDB = require("./config/db");
const swaggerSpec = require("./swagger");
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");
const movieInfoRoutes = require("./routes/movieInfoRoutes");
const rentedMoviesRoutes = require("./routes/rentedMoviesRoutes");
const errorHandler = require("./errors/errorHandler");

dotenv.config();

require("./config/passport");

const app = express();

connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
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

const PORT = process.env.PORT || 8080;
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});

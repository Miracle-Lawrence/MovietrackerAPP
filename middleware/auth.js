const isAuthenticated = (req, res, next) => {
  try {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    }

    return res.status(401).json({
      message: "Unauthorized. Please login with GitHub.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Authentication check failed",
      error: error.message,
    });
  }
};

module.exports = isAuthenticated;

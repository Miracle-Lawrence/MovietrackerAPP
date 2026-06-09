const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/auth/login-failed",
  }),
  (req, res) => {
    res.redirect("/api-docs");
  },
);

router.get("/login-failed", (req, res) => {
  res.status(401).json({
    message: "GitHub login failed",
  });
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.json({
      message: "Logged out successfully",
    });
  });
});

router.get("/current-user", (req, res) => {
  res.json({
    user: req.user || null,
  });
});

module.exports = router;

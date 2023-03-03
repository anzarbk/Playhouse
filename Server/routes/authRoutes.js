const {
  signup,
  login,
  googleSignup,
} = require("../controllers/authController");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/googleSignup", googleSignup);

module.exports = router;

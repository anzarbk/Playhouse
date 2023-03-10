const { checkIsAuth } = require("../controllers/authController");
const {
  editProfile,
  editProfileImage,
} = require("../controllers/profileController");
const router = require("express").Router();

// router.post("/auth/signup");
router.patch("/profile", checkIsAuth, editProfile);
module.exports = router;
router.patch("/profile-image", checkIsAuth, editProfileImage);
module.exports = router;

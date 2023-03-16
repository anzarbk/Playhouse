const { checkIsAuth } = require("../controllers/authController");
const {
  editProfile,
  editProfileImage,
} = require("../controllers/profileController");
const {
  createTheatre,
  editTheatre,
  theatreEditImage,
  theatreGetData,
} = require("../controllers/theatreController");
const router = require("express").Router();

// router.post("/auth/signup");
router.patch("/profile", checkIsAuth, editProfile);
module.exports = router;
router.patch("/profile-image", checkIsAuth, editProfileImage);
module.exports = router;
router.post("/theatre", checkIsAuth, createTheatre);
module.exports = router;
router.patch("/theatre", checkIsAuth, editTheatre);
module.exports = router;
router.patch("/theatre-image", checkIsAuth, theatreEditImage);
module.exports = router;
router.get("/theatre-data/:id", checkIsAuth, theatreGetData);
module.exports = router;

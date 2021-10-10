const express = require("express");
const router = express.Router();

const {
  getProfile,
  editProfile,
  login,
  register,
  
} = require("../controllers/user");

// res user profile
router.route("/:userID").patch(editProfile).get(getProfile);

// register
router.route("/register").post(register);

// login
router.route("/login").post(login);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getProfile,
  editProfile,
  login,
  register,
  
} = require("../controllers/User.js");

// register
router.route("/register").post(register);

// login
router.route("/login").post(login);

// res user profile
router.route("/:userID").post(editProfile).get(getProfile);



// login
router.route("/login").post(login);

module.exports = router;

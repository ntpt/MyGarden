const express = require("express");
const router = express.Router();

const {
  showPlant,
  getMyGarden,
  addLovePlant,

} = require("../controllers/FavoritePlant.js");

router.route("/search").get(showPlant);


router.route("/:userID").post(getMyGarden);


router.route("/").post(addLovePlant);
module.exports = router;

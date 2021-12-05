const express = require("express");
const router = express.Router();

const {
  showPlant,
  getMyGarden,
  addLovePlant,
  deleteLovePlant,
} = require("../controllers/FavoritePlant.js");

router.route("/search").get(showPlant);

router.route("/:userID").post(getMyGarden);

router.route("/").post(addLovePlant);

router.route("/:userID/:plantID").delete(deleteLovePlant);
module.exports = router;

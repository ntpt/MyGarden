const express = require("express");
const router = express.Router();

const {
  showPlant,
  showPlantsSearched,
  getMyGarden,
  addLovePlant

} = require("../controllers/FavoritePlant");

router.route("/search").get(showPlant);

router.route("/:userID").get(showPlantsSearched).post(getMyGarden);

router.route("/:userID/:plantID").post(addLovePlant);
module.exports = router;

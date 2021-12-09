const User = require("../models/User");
const Plant = require("../models/Plant");
const FavoritePlant = require("../models/FavoritePlant");

exports.showPlant = async (req, res) => {
  try {
    let msg = req.query.keyword;

    const inforPlant = await Plant.find({
      name: { $regex: ".*" + msg + ".*", $options: "i" },
    });

    return res.status(200).json(inforPlant);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.addLovePlant = async (req, res) => {
  try {
    const userID = req.body.userID;
    const plantID = req.body.plantID;

    let idLovePlant = await FavoritePlant.findOne({
      userID: userID,
      plantID: plantID,
    });

    if (idLovePlant === null) {
      const lovePlant = new FavoritePlant({
        userID: userID,
        plantID: plantID,
        description: req.body.description,
        image: req.body.image,
      });

      await lovePlant.save(function (err, doc) {
        console.log(doc);
        console.log(err);
      });

      // FavoritePlant.push(lovePlant);
      // await FavoritePlant.save();

      return res.status(200).json({ msg: "sussces" });
    } else {
      return res.status(400).json({ msg: "Already love plant" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

exports.deleteLovePlant = async (req, res) => {
  try {
    const userID = req.params.userID;
    const plantID = req.params.plantID;

    let removedFavoritePlant = await FavoritePlant.findOneAndDelete({
      userID: userID,
      plantID: plantID,
    });

    return res.status(200).json(removedFavoritePlant);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getMyGarden = async (req, res) => {
  try {
    const userID = req.params.userID;

    let gardenFavoritePlant = await FavoritePlant.find({ userID: userID });

    let listGarden = await gardenFavoritePlant.map(async (item) => {
      let gardenName = await Plant.findById(item.plantID).select("name");

      return { ...item._doc, name: gardenName.name };
    });

    let data = await Promise.all(listGarden);

    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

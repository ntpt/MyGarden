const User = require("../models/User");
const Plant = require("../models/Plant");
const FavoritePlant = require("../models/FavoritePlant");
const { ObjectId } = require("mongodb");

exports.showPlant = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    let msg = req.body.keyword;
    console.log(msg);
    const inforPlant = await Plant.find({name: "Xương rồng"});

    console.log(inforPlant);
    return res.status(200).json(inforPlant);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

exports.showPlantsSearched = async (req, res) => {};

exports.addLovePlant = async (req, res) => {
  try {
    const userID = req.params.userID;
    const plantID = req.body.friendID;

    let user = await User.findById(userID);

    if (user.favoritePlant.indexOf(plantID) == -1) {
      const lovePlant = new FavoritePlant({
        description: req.body.description,
        image: req.body.image,
      });

      user.favoritePlant.push(lovePlant);
      await user.save();
    } else {
      res.status(400).json({ msg: "Already love plant" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

exports.getMyGarden = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json(error);
    }
};

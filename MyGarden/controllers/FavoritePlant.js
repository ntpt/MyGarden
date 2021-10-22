const User = require("../models/User");
const Plant = require("../models/Plant");
const FavoritePlant = require("../models/FavoritePlant");
const { ObjectId } = require("mongodb");

exports.showPlant = async (req, res) => {
  try {
    let msg = req.body.keyword;
    const inforPlant = await Plant.find({
      name: { $regex: ".*" + msg + ".*", $options: "i" },
    });

    return res.status(200).json(inforPlant);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.showPlantsSearched = async (req, res) => {};

exports.addLovePlant = async (req, res) => {
  try {
    const userID = req.params.userID;
    const plantID = req.params.plantID;

    let user = await User.findById(userID);

      if (user.favoritePlant.indexOf(plantID) == -1) {
        console.log("plant of user" + user.favoritePlant[i]);
        console.log("plantID" + plantID);

        const lovePlant = new FavoritePlant({
          id: req.params.plantID,
          description: req.body.description,
          image: req.body.image,
        });

        user.favoritePlant.push(lovePlant);
        await user.save();

        return res.status(400).json({ msg: "sussces" });
      } else {
        return res.status(400).json({ msg: "Already love plant" });
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

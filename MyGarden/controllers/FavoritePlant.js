const User = require("../models/User");
const Plant = require("../models/Plant");
const FavoritePlant = require("../models/FavoritePlant");
const { ObjectId } = require("mongodb");
const FormData = require('form-data');
const axios = require('axios');

exports.showPlant = async (req, res) => {
  try {
    console.log("showPlant");
    let msg = req.query.keyword;

    const inforPlant = await Plant.find({
      name: { $regex: ".*" + msg + ".*", $options: "i" },
    });

    return res.status(200).json(inforPlant);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};


exports.addLovePlant = async (req, res) => {
  try {
    const userID = req.body.userID;
    const plantID = req.body.plantID;

    let user = await User.findById(userID);

    if (user.favoritePlant.indexOf(plantID) === -1) {
      

      const lovePlant = new FavoritePlant({
        "userID": userID,
        "plantID": plantID,
        "description": req.body.description,
        "image": req.body.image,
      });
      await lovePlant.save(function(err, doc){

          console.log(doc)
          console.log(err)
      });

      user.favoritePlant.push(plantID);
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
    const userID = req.params.userID;

    let garden = await User.findById(userID).select('favoritePlant');
       
    return res.status(200).json(garden);
    
  } catch (error) {
    res.status(400).json(error);
  }
};



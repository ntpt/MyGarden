var express = require("express");
var app = express();
app.use("/User/", require("./User"));

app.use("/FavoritePlant/", require("./FavoritePlant"));

module.exports = app ;

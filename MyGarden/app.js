const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const apiRouter = require("./routes/index");
const app = express();

//load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// Routes
app.use("/", apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

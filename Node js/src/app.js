const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./models/user");
require("./models/usage");
const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.json({
    message: " Success ",
  });
});

app.use("/api/", api);


module.exports = app;

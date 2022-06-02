const express = require("express");
const Usage = require("../models/usage");

const router = express.Router();

router.post("/usage", async (req, res) => {
  const { fullName,month, usage, buildingname, buildingno } = req.body;

  
  const newUsage = new Usage({ fullName,month, usage,buildingname,buildingno });
  const savedUsage = await newUsage.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot post at the moment!" });
  });

  if (savedUsage) res.json({ message: "Success" });
});

module.exports = router;

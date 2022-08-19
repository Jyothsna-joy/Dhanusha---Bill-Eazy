const express = require("express");
const All = require("../models/all");

const router = express.Router();

router.post("/allDetails", async (req, res) => {
  const {  fullName, email, buildingname, buildingno, month, usage } = req.body;

  const newAll = new All({ fullName, email, buildingname, buildingno, month, usage });
  const savedAll = await newAll.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot post usage at the moment!" });
  });

  if (savedAll) res.json({ message: "Success" });
});

module.exports = router;

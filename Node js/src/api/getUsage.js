const express=require("express");
const Usage= require("../models/usage");


const router = express.Router();

router.get("/getUsage", async (req, res) => {
  
  let all=await Usage.findAll({
    attributes:[
      'id',
      'fullName',
      'month',
      'usage',
      'buildingname',
      'buildingno'
    ]
  });
  res.status(200).send(all);
  
});

module.exports = router;

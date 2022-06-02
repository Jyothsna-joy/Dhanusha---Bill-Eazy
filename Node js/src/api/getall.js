const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.get("/getAll", async (req, res) => {
  
  let all=await User.findAll({
    attributes:[
      'id',
      'fullName',
      'email',
      'buildingname',
      'buildingno'
    ]
  });
  res.status(200).send(all);
  
});

module.exports = router;

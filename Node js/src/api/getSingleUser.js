const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.get("/getSingleUser/:id", async (req, res) => {
  const id=req.params.id;
  const users = await User.findOne({ where : {id : id} ,
    attributes:[
      'id',
      'fullName',
      'email',
      'buildingname',
      'buildingno'
    ]
  });
  res.status(200).send(users);
  
});
module.exports = router;

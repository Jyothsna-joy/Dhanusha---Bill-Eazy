const express=require("express");
const All= require("../models/all");


const router = express.Router();

router.get("/usagebyEmail/:email", async (req, res) => {
  const email=req.params.email;
  const all = await All.findAll({ where : {email : email} ,
    attributes:[
      'id',
      'fullName',
      'email',
      'buildingname',
      'buildingno',
      'month',
      'usage'
    ], 
  });
  res.status(200).json({
    data:all,
    message:'Success'
})
 
});
module.exports = router;

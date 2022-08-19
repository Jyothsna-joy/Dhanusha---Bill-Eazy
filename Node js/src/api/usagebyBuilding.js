const express=require("express");
const All= require("../models/all");


const router = express.Router();

router.get("/usagebyBuilding/:buildingname", async (req, res) => {
  const buildingname=req.params.buildingname;
  const all = await All.findAll({ where : {buildingname : buildingname} ,
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

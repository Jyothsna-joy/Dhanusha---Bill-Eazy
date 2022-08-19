const express=require("express");
const All= require("../models/all");


const router = express.Router();

router.get("/getSingle/:id", async (req, res) => {
  const id=req.params.id;
  const all = await All.findOne({ where : {id : id} ,
    attributes:[
      'id',
      'fullName',
      'email',
      'buildingname',
      'buildingno',
      'month',
      'usage'
    ]
  });
  res.status(200).send(all);
  
});
module.exports = router;

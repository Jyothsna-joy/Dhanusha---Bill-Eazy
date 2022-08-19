const express=require("express");
const { where } = require("sequelize");
const sequelize = require("sequelize");
const All= require("../models/all");


const router = express.Router();

router.get("/totalBuildingUsage/:buildingname", async (req, res) => {
    const buildingname = req.params.buildingname
    const totalAmount = await All.findAll(
      {where : {buildingname : buildingname},
        attributes: [
          'buildingname','month',
          [
          sequelize.fn('sum', sequelize.col('usage')),'units'     
        ]],
        group:['buildingname','month'],
  });
  res.status(200).json({
    status:true,
    data:totalAmount,
    message:'Success'
})
});

module.exports = router;




const express=require("express");
const { where } = require("sequelize");
const sequelize = require("sequelize");
const All= require("../models/all");


const router = express.Router();

router.get("/totalUsage", async (req, res) => {
    const totalAmount = await All.findAll({
        attributes: [
          'month',
          [
          sequelize.fn('sum', sequelize.col('usage')),'units'     
        ]],
        group:['month'],
  });
  res.status(200).json({
    status:true,
    data:totalAmount,
    message:'Success'
})
});

module.exports = router;




const express=require("express");
const { where } = require("sequelize");
const sequelize = require("sequelize");
const All= require("../models/all");


const router = express.Router();

router.get("/totalUserUsage/:email", async (req, res) => {
    const email = req.params.email
    const totalAmount = await All.findAll(
      {where : {email : email},
        attributes: [
          'email','month',
          [
          sequelize.fn('sum', sequelize.col('usage')),'units'     
        ]],
        group:['email','month'],
  });
  res.status(200).json({
    status:true,
    data:totalAmount,
    message:'Success'
})
});

module.exports = router;




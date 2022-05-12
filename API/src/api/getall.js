const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.get("/getAll", async (req, res) => {
  
  const users = await User.findAll();
  let all=await User.findAll({});
  res.status(200).send(all);
  console.log(all)
});
module.exports = router;

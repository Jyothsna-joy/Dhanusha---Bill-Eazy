const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.get("/getSingleUser/:id", async (req, res) => {
  const id=req.params.id;
  const users = await User.findOne({ where : {id : id}
  });
  res.status(200).send(users);
  console.log(users)
});
module.exports = router;

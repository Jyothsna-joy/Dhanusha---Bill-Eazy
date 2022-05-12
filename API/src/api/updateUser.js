const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.put("/updateUser/:id", async (req, res) => {
  let id=req.params.id;
  const user = await User.update(req.body , { where : {id : id}
  });
  res.status(200).send('Product is Updated');
  
});
module.exports = router;

const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.delete("/deleteUser/:id", async (req, res) => {
  let id=req.params.id;
  const user = await User.destroy({ where : {id : id}
  });
  res.status(200).send('Product is Deleted');
  
});
module.exports = router;

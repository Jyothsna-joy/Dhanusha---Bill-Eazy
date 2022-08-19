const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.get("/getCount", async (req, res) => {
  
//   const counter = await User.count({
//     where: {
//       email:"admin@gmail.com"
//     }
// });

  let count=await User.count({
    // where : { email:"dhanudhanusha88@gmail.com"}
    col:'fullName'
  });
  // console.log("Count : ",count)
  res.sendStatus(200).send(count);
  // console.log( "Count : ",counter);
  // res.status(200).send(counter);
});

module.exports = router;

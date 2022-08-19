const express=require("express");
const User= require("../models/user");


const router = express.Router();

router.get("/getAll/:pageNo/:limit", async (req, res) => {
  
//   const counter = await User.count({
//     where: {
//       email:"admin@gmail.com"
//     }
// });
let pageNo = parseInt(req.params.pageNo);
let limit = parseInt(req.params.limit);
let offset = parseInt((pageNo - 1) * limit); 

let all=await User.findAll({
    attributes:[
      'id',
      'fullName',
      'email',
      'buildingname',
      'buildingno'
    ],
    limit:limit,
    offset:offset,
  });
  // console.log(all);
  const count = await User.count();
  // console.log(count);
  
  // res.status(200).send(all);
  // console.log( "Count : ",counter);
  // res.status(200).send(counter);
  res.status(200).json({
    status:true,
    data:all,
    total:count,
    message:'Success'
})
});

module.exports = router;

const express=require("express");
const Usage= require("../models/usage");


const router = express.Router();

router.get("/getUsage/:pageNo/:limit", async (req, res) => {
  let pageNo = parseInt(req.params.pageNo);
  let limit = parseInt(req.params.limit);
  let offset = parseInt((pageNo - 1) * limit); 

  let all=await Usage.findAll({
    attributes:[
      'id',
      'fullName',
      'month',
      'usage',
      'buildingname',
      'buildingno'
    ],
    limit:limit,
    offset:offset,
  })
  console.log(all);
  const count = await Usage.count();
  console.log(count);
  res.status(200).json({
    status:true,
    data:all,
    total:count,
    message:'Success'
})
  
});
// const mongoose = require('mongoose');
// const User = mongoose.model('User');
// module.exports.getUsers= async function(req,res){
    
//   let pageNo = parseInt(req.params.pageNo);
//   let limit = parseInt(req.params.limit);
//   let offset = parseInt((pageNo - 1) * limit);

//   User.find()
//        .limit(limit)
//        .skip(offset)
//        .exec(async function (err,doc){
//        if(err){
//         return res.status(401).json({
//            status:false,
//            message:'there are some error with query'
//         })
//        }
  
      
//       })
// }

module.exports = router;

const express = require("express");
const All = require("../models/all")


const router = express.Router();

router.post("/usage", async (req, res) => {

  if(req.body.length!==0)
  {
    // req.body.forEach(element => {
    //   console.log(element.fullName)
    // });
    req.body.forEach(element => {
      const fullName=element.fullName;
      const email=element.email;
      const month=element.month;
      const usage=element.usage;
      const buildingname=element.buildingname;
      const buildingno=element.buildingno;
      
      console.log("fullname",fullName);

      const newAll = new All({ fullName, email, month, usage, buildingname, buildingno });
      
      console.log("newAll",newAll);
  const savedAll = newAll.save().catch((err) => {

     console.log("Error: ", err);
  });
    });
    
  }
 
  
  // const newUsage = new Usage([{ element.fullName,month, usage, buildingname, buildingno }]);
  // const savedUsage = await newUsage.save().catch((err) => {

  //   console.log("Error: ", err);
  //   res.status(500).json({ error: "Cannot post at the moment!" });
  // });

  // if (savedUsage) res.json({ message: "Success" });
});

module.exports = router;

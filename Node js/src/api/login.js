const express = require("express");
const User = require("../models/user");
const jwt=require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { roles, email, password } = req.body;

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });
      
  if (userWithEmail.roles !== roles)
    return res
      .status(400)
      .json({ message: "Invalid user roles"})


      if (userWithEmail.password !== password)
      return res
        .status(400)
        .json({ message: "Email or password does not match!" });
  const data={ id: userWithEmail.id, roles:userWithEmail.roles,email:userWithEmail.email, buildingname:userWithEmail.buildingname }
    const jwtToken = jwt.sign(
      { id: userWithEmail.id, roles:userWithEmail.roles, email: userWithEmail.email, buildingname:userWithEmail.buildingname },
      process.env.JWT_SECRET
    );
  
    res.json({
       message: "Welcome!", token: jwtToken ,data : data});
  });
  
module.exports = router;

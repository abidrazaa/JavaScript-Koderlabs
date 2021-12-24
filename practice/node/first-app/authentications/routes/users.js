const express = require("express");
const router = express.Router();
const {User , validateUser } = require("../models/user")


router.post("/",(req , res)=>{
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userExist = await User.findOne({email:req.body.email});

    if(userExist) return res.status(400).send("User Already Exist");

    

})
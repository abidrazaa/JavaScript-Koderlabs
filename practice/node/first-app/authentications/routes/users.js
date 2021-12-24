const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {User , validateUser } = require("../models/user")


router.post("/",async (req , res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userExist = await User.findOne({email:req.body.email});

    if(userExist) return res.status(400).send("User Already Exist");

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt); // hash password

    await user.save();

    console.log("Registered user ==> ", user);
    return res.status(200).send("User Registered successfully !!")

})

module.exports = router;
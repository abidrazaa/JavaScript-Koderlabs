const config = require("config");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { User } = require("../models/user")


router.post("/",async (req , res) => {
    const { error } = validateToLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userExist = await User.findOne({email:req.body.email});
    if(!userExist) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(req.body.password , userExist.password);
    if (!validPassword) return res.status(400).send("Invalid password or email");

    // const token = jwt.sign({_id : userExist._id}, config.get("jwtPrivateKey"));
    // const token = jwt.sign({_id : userExist._id}, "mysecurekey");
    const token = userExist.generateAuthToken();

    // return res.send(token);

    return res.header("x-auth-token", token).status(200).send(token);
})

function validateToLogin(User) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(50).email().required(),
        password: Joi.string().min(6).max(255).required()
    })

    return schema.validate(User)
}

module.exports = router;
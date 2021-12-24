const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        minlength:5,
        maxlength:25,
        required:true        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:6,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:255       // length zyada is waja se rakhi h takay jb hashing ho to length mn masla na aye
    }
})

const User = mongoose.model("User",userSchema);


function validateUser(User){
    const schema = {
        name: Joi.string().min(5).max(15).required(),
        email: Joi.string().min(5).max(50).email().required(),
        password: Joi.string().min(6).max(255).required()
    }

    return Joi.validate(User,schema);
}

exports.validateUser = validateUser;
exports.User = User;


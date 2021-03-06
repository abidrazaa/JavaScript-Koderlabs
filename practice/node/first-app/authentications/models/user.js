const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

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
});


userSchema.methods.generateAuthToken = function () {
     const token = jwt.sign({_id: this._id}, "mySecureKey");
     return token;
}

const User = mongoose.model("User",userSchema);


function validateUser(User){
    const schema = Joi.object({
        name: Joi.string().min(5).max(15).required(),
        email: Joi.string().min(5).max(50).email().required(),
        password: Joi.string().min(6).max(255).required()
    })

    return schema.validate(User);
}

exports.validateUser = validateUser;
exports.User = User;


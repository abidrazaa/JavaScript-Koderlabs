const express = require("express");
const router = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/validations")
    .then( () => {
        console.log("Database is connected...")
    })
    .catch((error) => {
        console.log("failed to connect...")
    })

const usersSchema = new mongoose.Schema({
    name : {
        type: String ,
        required : true,
        minlength : 5,
        maxlength: 10
    },
    isAdmin : {
        type: Boolean,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["male", "female", "other"]
    },
    tags : {
        type: Array,
        validate: {
            validator : function (v) {
                return v && v.length > 0;
            },
            message : "A course should have atleast one value."
        }
    },
    phone : {
        type : Number , 
        required : function () {   // agar isAdmin true hoga to phone required hojaega warna nhy
            return this.isAdmin
        }
    }
})

const User = mongoose.model("User",usersSchema)

async function createUser(req, res){
    const user = new User ({
        name: "Abid Raza",
        isAdmin : true,
        gender : "male",
        phone: 123344,
        tags : ["admin" , "software engineer"]
    })

    try{
        const result = await user.save();
        console.log(result)
    }
    catch(error){
        console.log(error.message)
    }
}
createUser()
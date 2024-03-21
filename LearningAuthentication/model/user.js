const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true, 
        unique: true
    },
    password:{
        type: String, 
        minLength: 6, 
        required: true
    }, 
    role:{
        type: String,
        default: "Basic",
        required: true,
    }
})

const User  = mongoose.model("user", UserSchema)
module.exports = User
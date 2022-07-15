const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname :{
        type: String,
        required:true
    },
    username :{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        required:true
    },
    updateAt:{
        type:Date,
        required:false
    },
    isDeleted:{
        type:String,
        required:true
    }


})

const User = mongoose.model("user",UserSchema)
module.exports = User;
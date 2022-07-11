const express = require('express')
const router = express.Router()
const crypto = require('crypto');

const userModel = require('../models/usersModels');
const { response } = require('express');

router.get("/register", async (req,res)=>{
    const fullname = "Admin"
    const username = "admin"
    const email = "admin@gmail.com"
    const password = "admin"
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var pass = crypto.createHash('md5').update(password).digest('hex')
    var isDeleted = "NO"
    
    const user = new userModel({fullname: fullname,username :username,email :email,password :pass,createAt : dateTime,updateAt:"", number:"0",isDeleted:isDeleted, status:"Member"})
    try{
        await user.save()
        console.log("Data have been saved")
    }catch(err){
        console.log(err)
    }

})

router.post("/login", async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    var hash = crypto.createHash('md5').update(password).digest('hex')

        userModel.find({username:username,password:hash,isDeleted:"NO"},(err,results)=>{
            if(err || results.length<=0){
                console.log(err)
                res.send({message:"Wrong Password or Username"})
            }else{
                if(username == results[0].username && hash == results[0].password){
                    res.json({In:true,code:results[0]._id})
                }
            }
        })  

})

module.exports = router;
const express = require('express');
var cors = require('cors')
const { default: mongoose } = require('mongoose');
const app = express()

app.use(cors())
app.use(express.json())

const db = mongoose.connect("mongodb+srv://williamkosasie:wil4526879@codingcomv2.m80xs.mongodb.net/UncleBudi?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

const userRoute = require('./route/users')
app.use("/user",userRoute)

app.listen(3001,()=>{
    console.log("Server running on port 3001....")
})
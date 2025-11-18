const express=require("express")
const app=express();
require("dotenv").config()
app.get("/api/get",(req,res)=>{
    res.send({
        message:"Hello back to node js "
    })
})
app.get("/api/get_user_details",(req,res)=>{
    res.send({
        user:{
            name:"hri",
            age:22,
            contact:1234 
        },env:process.env.NAME
    })
})

app.listen(process.env.PORT,()=>{
    console.log("listening to port 8000");
})
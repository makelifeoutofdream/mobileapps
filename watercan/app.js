var express=require("express");
var app=express();
app.listen(3000,()=>{
    console.log("server created successfully");
})

app.get("/getUser",(req,res,next)=>{
    res.json({'name' : 'ajay'});
})
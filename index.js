const express = require('express');
const app = express();
const serverConfig = require('./configs/server.config');
const PORT = serverConfig.PORT



app.get('/',(req,res)=>{
    res.json({msg:"API Working"})
})


app.listen(PORT,()=>{
    console.log("Sever Started on Port ",PORT)
})

const express = require('express');
const app = express();




app.get('/',(req,res)=>{
    res.json({msg:"API Working"})
})


app.listen(3000,()=>{
    console.log("Sever Started on Port 3000")
})

const express = require('express');
const app = express();
const serverConfig = require('./configs/server.config');
const PORT = serverConfig.PORT;
const { MongoClient } = require('mongodb');

const uri = process.env.DB_URI;
const client = new MongoClient(uri,{
    
});
async function run() {
  try {
    await client.connect();
    const db = client.db('MovieTicketBokingApplication');
    console.log("successfully connected to database")
  }
  finally {
    // await client.close();
    // console.log("closed connection with database")
    console.log("still connected to database")
  }
}
run().catch(console.error);

app.get('/',(req,res)=>{
    res.json({msg:"API Working"})
})


app.listen(PORT,()=>{
    console.log("Sever Started on Port ",PORT)
})

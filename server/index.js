import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("data base connected")
  app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT);
  })
}).catch(err=>{
  console.log(err)
})
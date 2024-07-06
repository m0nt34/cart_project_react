import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import config from './src/config/config.js'
import apiRoutes from './src/api/api.js'
import routes from './src/route/route.js'
const app = express();

dotenv.config()

app.use(config)
app.use("/get",apiRoutes)
app.use("/",routes)
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("data base connected")
  app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT);
  })
}).catch(err=>{
  console.log(err)
})
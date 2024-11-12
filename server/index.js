import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import configureApp from "./src/config/config.js";
import apiRoutes from "./src/api/api.js";
import routes from "./src/route/route.js";
const app = express();

dotenv.config();

configureApp(app);

app.use("/get", apiRoutes);
app.use("/", routes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

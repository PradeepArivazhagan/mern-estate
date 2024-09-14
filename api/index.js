import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//bjPBuTj0rO2LKKil

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on Port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

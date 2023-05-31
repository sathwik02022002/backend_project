const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const posts = require("./controller/posts");

mongoose
  .connect(
    "mongodb+srv://sathwik022002:HH29GtuAiYBzVHQz@cluster0.m6pfhni.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((mongoose) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error");
  });
app.use(cors);
app.use(express.json());
app.use("/post", posts);

app.listen(3000, () => {
  console.log("Server started");
});

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

if (!MONGOURL) {
  console.error("MONGO_URL is not defined in the .env file");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello World updated!");
});

// Connect to MongoDB
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log(`database is connected to MongoDB`);
    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
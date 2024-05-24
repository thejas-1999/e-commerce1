import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json());

if (!MONGOURL) {
  console.error("MONGO_URL is not defined in the .env file");
  process.exit(1);
}

app.use("/api", userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
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

import dotenv from 'dotenv';
import express from "express";
import { router } from "./routes/routes.js";
import { dbConnect } from "./config/database.js";

dotenv.config();

const app = express();

// Middleware: log each request
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Middleware: CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Middleware: body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ✅ Root route to fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("✅ Backend is up and running!");
});

// Your routes
app.use(router);

// Connect to the database
dbConnect();

// Set port with fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

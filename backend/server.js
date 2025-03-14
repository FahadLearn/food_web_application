import express from "express";
import dotenv from "dotenv";
import UserRouter from "./src/Routes/User.Routes.js";
// import rider_router from "./src/Routes/riderRoute.js";
// import restaurant_router from "./src/Routes/restaurantRoute.js";
import db from "./src/config/db.js";

import cors from "cors";
import cookieParser from "cookie-parser";
// ✅ Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form-data support

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // React app ka URL
    credentials: true, // Cookies send karne ke liye
  })
);

// ✅ Routes
app.use("/api", UserRouter);

// ✅ Root route
app.get("/", (req, res) => res.send("Food web application APIs are running"));

// ✅ Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

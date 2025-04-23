import express from "express";
import {
  logout,
  register,
  restProfile,
  updateRestaurant,
} from "../Controllers/Restaurant.Controller.js";
import upload from "../config/Restaurant_multer.js";

const Rest_Route = express.Router();

Rest_Route.post("/register", register);
Rest_Route.get("/Profile", restProfile);
Rest_Route.patch("/update", upload.none(), updateRestaurant);
Rest_Route.post("/logout", logout);
export default Rest_Route;

import express from "express";
import {
  getRest,
  getRestById,
  logout,
  register,
  restProfile,
  updateRestaurant,
} from "../Controllers/Restaurant.Controller.js";
import upload from "../config/Restaurant_multer.js";
// import { GetAllMenu } from "../Models/Menu.Model.js";

const Rest_Route = express.Router();

Rest_Route.post("/register", register);
Rest_Route.get("/Profile", restProfile);
Rest_Route.patch("/update", upload.single("Img"), updateRestaurant);
Rest_Route.post("/logout", logout);
Rest_Route.get("/allRest", getRest);
Rest_Route.get("/rest/:Restaurant_ID", getRestById);
export default Rest_Route;

import express from "express";
import { register } from "../Controllers/Restaurant.Controller.js";

const Rest_Route = express.Router();

Rest_Route.post("/register", register);

export default Rest_Route;

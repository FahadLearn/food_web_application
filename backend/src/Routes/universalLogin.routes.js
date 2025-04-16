import express from "express";
import { universalLogin } from "../Controllers/UniversalLogin.Controller.js";

const Route = express.Router();

Route.post("/login", universalLogin);
export default Route;

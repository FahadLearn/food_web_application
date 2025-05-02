import express from "express";
import { createorder } from "../Controllers/Order.Controller.js";

const OrderRoute = express.Router();
OrderRoute.post("/create", createorder);
export default OrderRoute;

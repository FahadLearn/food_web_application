import express from "express";
import {
  Register,
  Login,
  logout,
  adminLogin,
} from "../Controllers/User.Controller.js";

const UserRouter = express.Router();

UserRouter.post("/Register", Register);
UserRouter.post("/Login", Login);
UserRouter.post("/Admin_dashboard", adminLogin);
UserRouter.post("/Logout", logout);

export default UserRouter;

import express from "express";
import {
  Register,
  Login,
  logout,
  adminLogin,
  getUserProfile,
  chkLogin,
} from "../Controllers/User.Controller.js";
// import upload from "../config/multer.config.js";
const UserRouter = express.Router();

UserRouter.post("/Register", Register);
UserRouter.get("/Profile", getUserProfile);
UserRouter.post("/Login", Login);
UserRouter.get("/chkLogin", chkLogin);
UserRouter.post("/Admin_dashboard", adminLogin);
UserRouter.post("/Logout", logout);

export default UserRouter;

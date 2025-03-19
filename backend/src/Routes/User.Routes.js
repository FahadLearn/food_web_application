import express from "express";
import {
  Register,
  Login,
  logout,
  adminLogin,
  getUserProfile,
  updateUserProfile,
  chkLogin,
} from "../Controllers/User.Controller.js";

const UserRouter = express.Router();

UserRouter.post("/Register", Register);
UserRouter.get("/Getuser-profile", getUserProfile);
UserRouter.patch("/Updateuser-profile", updateUserProfile);
UserRouter.post("/Login", Login);
UserRouter.get("/chkLogin", chkLogin);
UserRouter.post("/Admin_dashboard", adminLogin);
UserRouter.post("/Logout", logout);

export default UserRouter;

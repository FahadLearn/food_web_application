import express from "express";
import {
  Register,
  Login,
  logout,
  adminLogin,
  getUserProfile,
  chkLogin,
  updateUser,
  updateUserImageController,
} from "../Controllers/User.Controller.js";
import upload from "../config/multer.js";
const UserRouter = express.Router();

UserRouter.post("/Register", Register);
UserRouter.get("/Profile", getUserProfile);
UserRouter.patch("/Update", updateUser);
UserRouter.patch("/Image", upload.single("IMG_URL"), updateUserImageController);
UserRouter.post("/Login", Login);
UserRouter.get("/chkLogin", chkLogin);
UserRouter.post("/Admin_dashboard", adminLogin);
UserRouter.post("/Logout", logout);

export default UserRouter;

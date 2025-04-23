import express from "express";
import {
  addItem,
  delete_Item,
  fetchCategories,
  Get_menu,
  getALLmenu,
  getMenuItem,
  getRestaurantCategory,
  getRestaurantItems,
  update_Item,
} from "../Controllers/Menu.Controller.js";

import upload from "../config/menu_multer.js";
const Menu_Route = express.Router();

Menu_Route.post("/Add", upload.single("Img"), addItem);
Menu_Route.patch("/Update/:Item_ID", upload.single("Img"), update_Item);
Menu_Route.get("/getMenu", Get_menu);
Menu_Route.get("/getItem/:Item_ID", getMenuItem);
Menu_Route.get("/getAllItems/:Restaurant_ID", getRestaurantItems);
Menu_Route.delete("/deleteItem/:Item_ID", delete_Item);
Menu_Route.get("/getAllMenu", getALLmenu);
Menu_Route.get("/Dis_cat", fetchCategories);
Menu_Route.get("/Dis_cat/:Restaurant_ID", getRestaurantCategory);
export default Menu_Route;

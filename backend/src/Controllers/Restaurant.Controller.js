import {
  chkBusiness,
  FindRestById,
  Register,
  UpdateRes,
} from "../Models/Restaurant.Model.js";
import { FindById } from "../Models/User.Model.js";

export const register = async (req, res) => {
  try {
    const {
      First_Name,
      Last_Name,
      Business_Name,
      Email,
      Password,
      Business_Type,
      Phone_Number,
      City,
      Province,
      Area,
      Postal_Code,
      Detail_Address,
      CNIC,
      License,
      FBR,
      Account_Title,
      Bank_Name,
      IBAN,
    } = req.body;
    console.log(req.body);

    // Validate inputs
    if (
      !First_Name ||
      !Last_Name ||
      !Business_Name ||
      !Email ||
      !Password ||
      !Business_Type ||
      !Phone_Number ||
      !City ||
      !Province ||
      !Area ||
      !Postal_Code ||
      !Detail_Address ||
      !CNIC ||
      !License ||
      !FBR ||
      !Account_Title ||
      !Bank_Name ||
      !IBAN
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if business already exists
    const business = await chkBusiness({ Email });
    if (business) {
      return res.status(400).json({ message: "Business already exists" });
    }

    // Assign an ID to the business
    const ID = "Restaurant_" + Math.floor(1 + Math.random() * 9000);
    console.log(ID);
    // Create a new business object
    const newRestaurant = await Register({
      Restaurant_ID: ID,
      First_Name,
      Last_Name,
      Business_Name,
      Email,
      Password,
      Business_Type,
      Phone_Number,
      City,
      Province,
      Area,
      Postal_Code,
      Detail_Address,
      CNIC,
      License,
      FBR,
      Account_Title,
      Bank_Name,
      IBAN,
    });

    if (newRestaurant) {
      return res
        .status(201)
        .json({ message: "Restaurant registered successfully" });
    }
  } catch (error) {
    console.error("Error registering restaurant:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("isLoggedIn");
    res.clearCookie("Restaurant_ID");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error logging out restaurant:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const { Restaurant_ID } = req.cookies;
    console.log("Extracted Restaurant_ID", Restaurant_ID);
    if (!Restaurant_ID) {
      return res.status(400).json({ message: "Restaurant_ID not found" });
    }
    const rest = await FindRestById({ Restaurant_ID });
    if (!rest) {
      return res.status(404).json({ message: "Restaurant does not exist." });
    }
    const updatedRestaurant = await UpdateRes({
      Restaurant_ID: Restaurant_ID,
      First_Name: req.body.First_Name || rest.First_Name,
      Last_Name: req.body.Last_Name || rest.Last_Name,
      Business_Name: req.body.Business_Name || rest.Business_Name,
      Email: req.body.Email || rest.Email,
      Password: req.body.Password || rest.Password,
      Business_Type: req.body.Business_Type || rest.Business_Type,
      Phone_Number: req.body.Phone_Number || rest.Phone_Number,
      City: req.body.City || rest.City,
      Province: req.body.Province || rest.Province,
      Area: req.body.Area || rest.Area,
      Postal_Code: req.body.Postal_Code || rest.Postal_Code,
      Detail_Address: req.body.Detail_Address || rest.Detail_Address,
      CNIC: req.body.CNIC || rest.CNIC,
      License: req.body.License || rest.License,
      FBR: req.body.FBR || rest.FBR,
      Account_Title: req.body.Account_Title || rest.Account_Title,
      Bank_Name: req.body.Bank_Name || rest.Bank_Name,
      IBAN: req.body.IBAN || rest.IBAN,
    });
    if (updatedRestaurant) {
      return res
        .status(200)
        .json({ message: "Restaurant updated successfully" });
    }
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const restProfile = async (req, res) => {
  try {
    const { Restaurant_ID } = req.cookies;
    console.log("Extracted Restaurant_ID", Restaurant_ID);
    if (!Restaurant_ID) {
      return res.status(400).json({ message: "Restaurant_ID not found" });
    }
    const restaurant = await FindRestById({ Restaurant_ID });
    if (restaurant) {
      return res.status(200).json(restaurant);
    }
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

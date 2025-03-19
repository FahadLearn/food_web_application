import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateTokens.js";
import {
  AdminChk,
  CreateUser,
  FindByEmail,
  FindById,
  UpdateUser,
} from "../Models/User.Model.js";
// import upload from "../config/multer.config.js";

// ✅ Register User
export const Register = async (req, res) => {
  try {
    const {
      Customer_ID,
      Name,
      Email,
      Password,
      Address,
      Phone_Number,
      IMG_URL,
    } = req.body;

    // ✅ Validate input fields
    if (!Name || !Email || !Password || !Address || !Phone_Number) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check if user already exists
    const existingUser = await FindByEmail(Email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // ✅ Hash password
    // const hashedPassword = await bcrypt.hash(Password, 10);

    // ✅ Generate custom user ID
    const userId = "USR" + Math.floor(1000 + Math.random() * 9000);

    // ✅ Create new user
    const newUser = await CreateUser({
      Customer_ID: userId,
      Name,
      Email,
      Password,
      Address,
      Phone_Number,
    });

    // ✅ Send response
    res.status(201).json({
      message: "User Registered",
      user: newUser.Customer_ID, // ✅ Optional: return created user
      token: generateToken(userId),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};

// ✅ Login User
export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await FindByEmail(Email);
    if (!user) return res.status(401).json({ message: "Invalid Email" });
    if (Password !== user.Password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // const isMatch = await bcrypt.compare(Password, user.Password);
    // if (!isMatch)
    //   return res.status(401).json({ message: "Invalid Email Password" });

    const token = generateToken(user);
    res.cookie("isLoggedIn", true, {
      httpOnly: false, // ✅ avoid js access
      secure: true, // ✅ http secure
      sameSite: "Strict", // ✅ to use on one site
      maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
    });
    res.cookie("Customer_ID", user.Customer_ID, {
      httpOnly: false, // ✅ avoid js access
      secure: true, // ✅ http secure
      sameSite: "Strict", // ✅ to use on one site
      maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
    });
    res.json({
      message: "Login successful",
      token,
      user: {
        Customer_ID: user.Customer_ID,
        Name: user.Name,
        Email: user.Email,
      },
    });

    // res.json({
    //   message: "Login successful",
    //   token,
    //   Customer_ID: user.Customer_ID,
    // });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Logout User
export const logout = (req, res) => {
  res.clearCookie("Customer_ID");
  res.clearCookie("isLoggedIn");
  res.json({ message: "Logged out successfully" });
};

// ✅ Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const admin = await AdminChk(Email);
    if (!admin) return res.status(401).json({ message: "Invalid Email" });
    if (Password !== admin.Password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // const isMatch = await bcrypt.compare(Password, user.Password);
    // if (!isMatch)
    //   return res.status(401).json({ message: "Invalid Email Password" });

    const token = generateToken(admin);
    res.cookie("token", token, {
      httpOnly: true, // ✅ avoid js access
      secure: true, // ✅ http secure
      sameSite: "Strict", // ✅ to use on one site
      maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
    });
    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUserProfile = async (req, res) => {
  const Customer_ID = req.cookies.Customer_ID; // ✅ Get user ID from cookie

  if (!Customer_ID) {
    return res.status(401).json({ message: "Unauthorized: No User ID found" });
  }
  try {
    const user = await FindById(Customer_ID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
// ✅ Update User

export const chkLogin = async (req, res) => {
  try {
    const isLoggedIn = req.cookies.isLoggedIn;
    console.log(isLoggedIn);
    return res.status(200).json({ isLoggedIn });
  } catch (error) {
    console.error("Error getting auth status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

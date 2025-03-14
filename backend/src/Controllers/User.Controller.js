import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateTokens.js";
import { AdminChk, CreateUser, FindByEmail } from "../Models/User.Model.js";

export const Register = async (req, res) => {
  try {
    const { Customer_ID, Name, Email, Password, Address, Phone_Number } =
      req.body;

    // Validate input fields
    if (!Name || !Email || !Password || !Address || !Phone_Number) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await FindByEmail(Email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(Password, 10);

    // Generate custom user ID
    const userId = "USR" + Math.floor(1000 + Math.random() * 9000);

    // Create new user
    const newUser = await CreateUser({
      Customer_ID: userId,
      Name,
      Email,
      Password,
      Address,
      Phone_Number,
    });

    // Send response
    res.status(201).json({
      message: "User Registered",
      user: newUser.Customer_ID, // Optional: return created user
      token: generateToken(userId),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
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
    //   return res
    //     .status(401)
    //     .json({ message: "Invalid Email Password password" });

    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true, // avoid js access
      secure: true, // http secure
      sameSite: "Strict", // to use on one site
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
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
export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
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
    //   return res
    //     .status(401)
    //     .json({ message: "Invalid Email Password password" });

    const token = generateToken(admin);
    res.cookie("token", token, {
      httpOnly: true, // avoid js access
      secure: true, // http secure
      sameSite: "Strict", // to use on one site
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
    });
    res.json({
      message: "Login successful",
      token,
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

import { chkBusiness } from "../Models/Restaurant.Model.js";
import { FindRiderByEmail } from "../Models/Rider.Model.js";
import { AdminChk, FindByEmail } from "../Models/User.Model.js";

// export const login = async (req, res) => {
//   try {
//     const { Business_Email, Password } = req.body;
//     const restaurant = await chkBusiness({ Business_Email });
//     if (!restaurant) return res.status(401).json({ message: "Invalid Email" });
//     if (Password !== restaurant.Password) {
//       return res.status(401).json({ message: "Invalid password" });
//     }
// res.cookie("isLoggedIn", true, {
//   httpOnly: false, // ✅ avoid js access
//   secure: true, // ✅ http secure
//   sameSite: "Strict", // ✅ to use on one site
//   maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
// });
// res.cookie("Restaurant_ID", restaurant.Restaurant_ID, {
//   httpOnly: false, // ✅ avoid js access
//   secure: true, // ✅ http secure
//   sameSite: "Strict", // ✅ to use on one site
//   maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
// });
// res.json({ success: true, userType: "Restaurant", });
//   } catch (error) {
//     console.error("Error logging in restaurant:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const adminLogin = async (req, res) => {
//   try {
//     const { Email, Password } = req.body;
// const admin = await AdminChk(Email);
// if (!admin) return res.status(401).json({ message: "Invalid Email" });
// if (Password !== admin.Password) {
//   return res.status(401).json({ message: "Invalid password" });
// }

//     // const isMatch = await bcrypt.compare(Password, user.Password);
//     // if (!isMatch)
//     //   return res.status(401).json({ message: "Invalid Email Password" });

//     const token = generateToken(admin);
//     res.cookie("isLoggedIN", true, {
//       httpOnly: true, // ✅ avoid js access
//       secure: true, // ✅ http secure
//       sameSite: "Strict", // ✅ to use on one site
//       maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
//     });
//     res.cookie("Email", Email, {
//       httpOnly: true, // ✅ avoid js access
//       secure: true, // ✅ http secure
//       sameSite: "Strict", // ✅ to use on one site
//       maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
//     });
//     res.json({
//       message: "Login successful",
//       Email,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const Login = async (req, res) => {
//   try {
//     const { Email, Password } = req.body;
// const user = await FindByEmail(Email);
// if (!user) return res.status(401).json({ message: "Invalid Email" });
// if (Password !== user.Password) {
//   return res.status(401).json({ message: "Invalid password" });
// }

//     // const isMatch = await bcrypt.compare(Password, user.Password);
//     // if (!isMatch)
//     //   return res.status(401).json({ message: "Invalid Email Password" });

//     const token = generateToken(user);
// res.cookie("isLoggedIn", true, {
//   httpOnly: false, // ✅ avoid js access
//   secure: true, // ✅ http secure
//   sameSite: "Strict", // ✅ to use on one site
//   maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
// });
// res.cookie("Customer_ID", user.Customer_ID, {
//   httpOnly: false, // ✅ avoid js access
//   secure: false, // ✅ http secure
//   sameSite: "Strict", // ✅ to use on one site
//   maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
// });
//     res.json({
//       message: "Login successful",
//       token,
//       user: {
//         Customer_ID: user.Customer_ID,
//         Name: user.Name,
//         Email: user.Email,
//       },
//     });

//     // res.json({
//     //   message: "Login successful",
//     //   token,
//     //   Customer_ID: user.Customer_ID,
//     // });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// export const login = async (req, res) => {
//   try {
//     const { Email, Password } = req.body;
// const user = await FindByEmail({ Email });
// if (!user) return res.status(401).json({ message: "Invalid Email" });
// if (Password !== user.Password) {
//   return res.status(401).json({ message: "Invalid password" });
// }

// res.cookie("isLoggedIn", true, {
//   httpOnly: false, // ✅ avoid js access
//   secure: true, // ✅ http secure
//   sameSite: "Strict", // ✅ to use on one site
//   maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
// });
// res.cookie("Rider_ID", user.RIDER_ID, {
//   httpOnly: false, // ✅ avoid js access
//   secure: true, // ✅ http secure
//   sameSite: "Strict", // ✅ to use on one site
//   maxAge: 3 * 24 * 60 * 60 * 1000, // ✅ 3 days
// });
//     res.json({
//       message: "Login successful",
//       user: {
//         Rider_ID: user.RIDER_ID,
//         Name: user.First_Name,
//         Email: user.Email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export const universalLogin = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    // Restaurant Login
    const restaurant = await chkBusiness({ Email });
    console.log("Restaurant:", restaurant);
    if (restaurant) {
      if (Password !== restaurant.Password) {
        return res.status(401).json({ message: "Invalid password" });
      }
      res.cookie("isLoggedIn", true, {
        httpOnly: false,
        secure: false, // Match Login's working setting
        sameSite: "Lax", // More permissive for development
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      res.cookie("Restaurant_ID", restaurant.Restaurant_ID, {
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      return res.json({ success: true, userType: "Restaurant" });
    }

    // Admin Login
    const admin = await AdminChk(Email);
    console.log("Admin:", admin);
    if (admin) {
      if (Password !== admin.Password) {
        return res.status(401).json({ message: "Invalid password" });
      }
      res.cookie("isLoggedIN", true, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      res.cookie("ID", admin.Admin_ID, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      return res.json({ success: true, userType: "Admin" });
    }

    // Customer Login
    const user = await FindByEmail(Email);
    console.log("User:", user);
    if (user) {
      if (Password !== user.Password) {
        return res.status(401).json({ message: "Invalid password" });
      }
      res.cookie("isLoggedIn", true, {
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      res.cookie("Customer_ID", user.Customer_ID, {
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      return res.json({ success: true, userType: "Customer" });
    }

    // Rider Login
    const rider = await FindRiderByEmail({ Email });
    console.log("Rider:", rider);
    if (rider) {
      if (Password !== rider.Password) {
        return res.status(401).json({ message: "Invalid password" });
      }
      res.cookie("isLoggedIn", true, {
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      res.cookie("Rider_ID", rider.RIDER_ID, {
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      return res.json({ success: true, userType: "Rider" });
    }

    // If no user is found
    return res.status(401).json({ message: "Invalid Email" });
  } catch (error) {
    console.error("Error in universalLogin:", error.message, error.stack);
    return res.status(500).json({ message: "Internal server Error" });
  }
};

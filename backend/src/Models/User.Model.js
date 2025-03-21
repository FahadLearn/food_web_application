import db from "../config/db.js";

// ✅ Create User (Signup)
export const CreateUser = async ({
  Customer_ID,
  Name,
  Email,
  Password,
  Address,
  Phone_Number,
  IMG_URL = null, // Default to null if not provided
}) => {
  try {
    const sql =
      "INSERT INTO customers(Customer_ID, Name, Email, Password, Address, Phone_Number, IMG_URL) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      Customer_ID,
      Name,
      Email,
      Password,
      Address,
      Phone_Number,
      IMG_URL,
    ];

    const result = await db.execute(sql, values);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

// ✅ Find User By Email
export const FindByEmail = async (email) => {
  try {
    const sql = "SELECT * FROM customers WHERE Email=?";
    const values = [email];
    const [rows] = await db.execute(sql, values);
    return rows.length > 0 ? rows[0] : null; // Return user if found, otherwise null
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const FindById = async (Customer_ID) => {
  try {
    const sql = "SELECT * FROM customers WHERE Customer_ID=?";
    const values = [Customer_ID];
    const [rows] = await db.execute(sql, values);
    return rows.length > 0 ? rows[0] : null; // ✅ Return user if found, else null
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const AdminChk = async (email) => {
  try {
    const sql = "SELECT * FROM admin WHERE Email = ?";
    const values = [email];
    const [rows] = await db.execute(sql, values);
    return rows.length > 0 ? rows[0] : null; // Return admin if found, otherwise null
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const UpdateUser = async ({
  Customer_ID,
  Name,
  Email,
  Password,
  Phone_Number,
  Address,
}) => {
  try {
    const sql = `
      UPDATE customers 
      SET Name=?, Email=?, Password=?, Phone_Number=?, Address=? 
      WHERE Customer_ID=?`;

    const values = [Name, Email, Password, Phone_Number, Address, Customer_ID];

    const [result] = await db.execute(sql, values);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Update Error:", error);
    throw new Error(error);
  }
};

export const updateUserImage = async ({ Customer_ID, IMG_URL }) => {
  try {
    const query = `UPDATE customers SET IMG_URL = ? WHERE Customer_ID = ?`;
    const values = [IMG_URL, Customer_ID];

    const [result] = await db.execute(query, values);

    if (result.affectedRows === 0) {
      throw new Error("User not found or image update failed");
    }

    return { success: true, message: "Image updated successfully" };
  } catch (error) {
    console.error("❌ Error in updateUserImage:", error.message);
    throw new Error(error.message || "Database error while updating image");
  }
};

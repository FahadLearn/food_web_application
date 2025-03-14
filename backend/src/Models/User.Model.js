import db from "../config/db.js";

export const CreateUser = async ({
  Customer_ID,
  Name,
  Email,
  Password,
  Address,
  Phone_Number,
}) => {
  try {
    const sql =
      " INSERT INTO customers(Customer_ID,Name,Email,Password,Address,Phone_Number) VALUES (?,?,?,?,?,?)";
    const values = [Customer_ID, Name, Email, Password, Address, Phone_Number];
    const result = await db.execute(sql, values);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
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
export const AdminChk = async (email) => {
  try {
    const sql = "SELECT * FROM admin where Email = ?";
    const values = [email];
    const [rows] = await db.execute(sql, values);
    return rows.length > 0 ? rows[0] : null; // Return user if found, otherwise null
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

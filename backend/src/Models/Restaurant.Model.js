import db from "../config/db.js";

export const Register = async ({
  Restaurant_ID,
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
}) => {
  try {
    const sql = `INSERT INTO restaurants(Restaurant_ID,First_Name,Last_Name,Business_Name,Email,Password,Business_Type,Phone_Number,City,Province,Area,Postal_Code,Detail_Address,CNIC,License,FBR,Account_Title,Bank_Name,IBAN) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    const values = [
      Restaurant_ID,
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
    ];
    const [result] = await db.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const chkBusiness = async ({ Email }) => {
  try {
    const sql = `SELECT * FROM RESTAURANTS WHERE Email=?`;
    const values = [Email];
    const [rows] = await db.execute(sql, values);
    return rows.length > 0 ? rows[0] : null; // Return restaurant if found, otherwise null
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const FindRestById = async ({ Restaurant_ID }) => {
  try {
    const sql = `SELECT * FROM RESTAURANTS WHERE Restaurant_ID=?`;
    const values = [Restaurant_ID];
    const [rows] = await db.execute(sql, values);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const UpdateRes = async ({
  Restaurant_ID,
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
  Img,
}) => {
  try {
    const sql = `UPDATE restaurants
    SET
      First_Name = ?,
      Last_Name = ?,
      Business_Name = ?,
      Email = ?,
      Password = ?,
      Business_Type = ?,
      Phone_Number = ?,
      City = ?,
      Province = ?,
      Area = ?,
      Postal_Code = ?,
      Detail_Address = ?,
      CNIC = ?,
      License = ?,
      FBR = ?,
      Account_Title = ?,
      Bank_Name = ?,
      IBAN = ?
      ,Img = ?
   
    WHERE Restaurant_ID = ?;
    `;

    const values = [
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
      Img,
      Restaurant_ID,
    ];

    const [rows] = await db.execute(sql, values);
    return rows.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const GetAllRest = async () => {
  try {
    const sql = `SELECT * FROM restaurants`;
    const [rows] = await db.execute(sql);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

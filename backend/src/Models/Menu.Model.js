import db from "../config/db.js";

export const Add_Item = async ({
  Item_ID,
  Name,
  Category,
  Price,
  Discount,
  Description,
  Img = null,
  Availability,
  Restaurant_ID,
}) => {
  try {
    const sql = `INSERT INTO MENU ( Item_ID,
  Name,
  Category,
  Price,
  Discount,
  Description,
  Img,
  Availability,
  Restaurant_ID) VALUES (?,?,?,?,?,?,?,?,?)`;
    const values = [
      Item_ID,
      Name,
      Category,
      Price,
      Discount,
      Description,
      Img,
      Availability,
      Restaurant_ID,
    ];
    const [result] = await db.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const FindById = async ({ Item_ID }) => {
  try {
    const sql = `SELECT * FROM MENU WHERE Item_ID = ?`;
    const values = [Item_ID];
    const [row] = await db.execute(sql, values);
    return row.length > 0 ? row[0] : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const Update_Item = async ({
  Item_ID,
  Name,
  Category,
  Price,
  Discount,
  Description,
  Img = null,
  Availability,
}) => {
  try {
    const sql = `UPDATE MENU 
        SET Name = ?, Category = ?, Price = ?, Discount = ?, Description = ?, Img = ?, Availability = ?
        WHERE Item_ID = ?`;

    const values = [
      Name,
      Category,
      Price,
      Discount,
      Description,
      Img,
      Availability,
      Item_ID, // ✅ Fix: Make sure Item_ID is passed
    ];

    const [result] = await db.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const Delete_Item = async ({ Item_ID }) => {
  try {
    const sql = `DELETE FROM MENU WHERE Item_ID =?`;
    const values = [Item_ID];
    const [result] = await db.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const Get_Items_By_Restaurant = async ({ Restaurant_ID }) => {
  try {
    const sql = `SELECT * FROM MENU WHERE Restaurant_ID =?`;
    const values = [Restaurant_ID];
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const Get_Items_By_Category = async ({ Category }) => {
  try {
    const sql = `SELECT * FROM MENU WHERE Category =?`;
    const values = [Category];
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const GetAllMenu = async () => {
  try {
    const sql = `SELECT * FROM MENU`;
    const [rows] = await db.execute(sql);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const Distinct_Category = async () => {
  try {
    const sql = `SELECT DISTINCT Category from Menu`;
    const [rows] = await db.execute(sql);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const Distinct_Restaurant_Category = async ({ Restaurant_ID }) => {
  try {
    const sql = `SELECT DISTINCT Category from Menu WHERE Restaurant_ID = ?`;
    const value = [Restaurant_ID];
    const [rows] = await db.execute(sql, value);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

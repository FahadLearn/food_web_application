import db from "../config/db.js";

export const CreateOrder = async ({
  Order_ID,
  Full_Name,
  Address,
  Phone_Number,
  Payment_Method,
  Total_Ammount,
}) => {
  try {
    const sql = `INSERT INTO ORDERS(Order_ID,
    Full_Name,
    Address,
    Phone_Number,
    Payment_Method,
    Total_Ammount)VALUES(?,?,?,?,?,?)`;
    const values = [
      Order_ID,
      Full_Name,
      Address,
      Phone_Number,
      Payment_Method,
      Total_Ammount,
    ];
    const result = await db.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const CreateOrderItem = async ({
  Order_Item_ID,
  Order_ID,
  Restaurant_ID,
  Item_ID,
  Quantity,
  Price,
}) => {
  try {
    const sql = `INSERT INTO Order_items(Order_Item_ID,
  Order_ID,
  Restaurant_ID,
  Item_ID,
  Quantity,
  Price)VALUES(?,?,?,?,?,?)`;
    const values = [
      Order_Item_ID,
      Order_ID,
      Restaurant_ID,
      Item_ID,
      Quantity,
      Price,
    ];
    const result = await db.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const GetOrdersByRestaurant = async ({ Restaurant_ID }) => {
  try {
    const sql = `SELECT 
      oi.Order_Item_ID,
      o.Full_Name,
      o.Address,
      o.Phone_Number,
      o.Payment_Method,
      o.Total_Amount,
      oi.Item_ID,
      oi.Quantity,
      oi.Price
    FROM Order_Items oi
    INNER JOIN Orders o ON oi.Order_ID = o.Order_ID
    WHERE oi.Restaurant_ID = ?;`;
    const values = [Restaurant_ID];
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

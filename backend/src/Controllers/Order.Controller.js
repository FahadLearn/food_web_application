import db from "../config/db.js";
import { CreateOrder, CreateOrderItem } from "../Models/Order.Model.js";

export const createorder = async (req, res) => {
  try {
    const {
      Full_Name,
      Address,
      Phone_Number,
      Payment_Method,
      Total_Ammount,
      items,
    } = req.body;

    const Order_ID = "Order_" + Math.floor(1 + Math.random() * 100000);

    // Create order
    const order = await CreateOrder({
      Order_ID,
      Full_Name,
      Address,
      Phone_Number,
      Payment_Method,
      Total_Ammount,
    });

    // Create order items
    for (const item of items) {
      const Order_Item_ID =
        "Order_item_" + Math.floor(1 + Math.random() * 100000);
      await CreateOrderItem({
        Order_Item_ID,
        Order_ID,
        Restaurant_ID: item.Restaurant_ID,
        Item_ID: item.Item_ID,
        Quantity: item.Quantity,
        Price: item.Price,
      });
    }

    res.status(201).send({
      message: "Order created successfully",
      orderId: order,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

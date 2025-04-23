import path from "path";
import {
  Add_Item,
  Delete_Item,
  Distinct_Category,
  Distinct_Restaurant_Category,
  FindById,
  Get_Items_By_Restaurant,
  GetAllMenu,
  Update_Item,
} from "../Models/Menu.Model.js";
import fs from "fs";
export const addItem = async (req, res) => {
  try {
    const {
      Item_ID,
      Name,
      Category,
      Price,
      Discount,
      Description,
      Availability,
    } = req.body;

    const { Restaurant_ID } = req.cookies;
    if (!Restaurant_ID) {
      return res.status(400).json({ message: "Restaurant ID is required." });
    }

    if (
      !Item_ID ||
      !Name ||
      !Category ||
      !Price ||
      !Description ||
      typeof Availability === "undefined"
    ) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const item = await FindById({ Item_ID });
    if (item) {
      return res.status(400).json({
        message: "Item_ID already exists, change it to add a new item",
      });
    }

    let Img = "";
    if (req.file) {
      Img = `/uploads/menu/${req.file.filename}`;
    }

    const newItem = await Add_Item({
      Item_ID,
      Name,
      Category,
      Price,
      Discount,
      Description,
      Img,
      Availability,
      Restaurant_ID,
    });

    return res.status(201).json({
      message: "Item added successfully",
      data: newItem,
    });
  } catch (error) {
    console.error("❌ Error adding item:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const update_Item = async (req, res) => {
  try {
    const { Restaurant_ID } = req.cookies;
    console.log(req.cookies); // Log to check the cookies

    if (!Restaurant_ID) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No Restaurant ID found" });
    }

    const { Name, Category, Price, Discount, Description, Availability } =
      req.body;
    const { Item_ID } = req.params;
    console.log(req.params);

    // Ensure fields are valid
    if (
      !Name ||
      !Category ||
      !Price ||
      !Discount ||
      !Description ||
      !Availability
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const item = await FindById({ Item_ID });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    let Img = item.Img; // Keep old image path if no new file is uploaded

    // Handle file upload
    if (req.file) {
      const oldImagePath = path.join("uploads/menu", path.basename(item.Img));
      const newImagePath = `/uploads/menu/${req.file.filename}`;

      // Delete old image if it exists
      if (item.Img && fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }

      Img = newImagePath;
    }

    // Update the item with the new data
    const updatedItem = await Update_Item({
      Item_ID,
      Name,
      Category,
      Price,
      Discount,
      Description,
      Img,
      Availability,
      Restaurant_ID,
    });

    if (updatedItem === 0) {
      return res.status(400).json({ message: "No changes made" });
    }

    return res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Error updating item:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const delete_Item = async (req, res) => {
  try {
    const { Item_ID } = req.params;
    console.log("Item_ID to delete:", Item_ID, " | Type:", typeof Item_ID);

    if (!Item_ID) {
      return res.status(400).json({ message: "Item does not exist" });
    }

    // ✅ Just pass the Item_ID directly, not wrapped again
    const itemDel = await Delete_Item({ Item_ID });

    console.log("Item Deleted =", itemDel);

    if (itemDel === 0) {
      return res.status(404).json({ message: "Item not found in DB" });
    }

    res.status(200).json({
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const Get_menu = async (req, res) => {
  try {
    const { Restaurant_ID } = req.cookies;
    if (!Restaurant_ID) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No Restaurant ID found" });
    }
    const menu = await Get_Items_By_Restaurant({ Restaurant_ID });
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res
      .status(200)
      .json({ message: "Menu fetched successfully", data: menu });
  } catch (error) {}
};
export const getMenuItem = async (req, res) => {
  try {
    const { Item_ID } = req.params; // Get the Item_ID from the URL params
    console.log("Fetching item with ID:", Item_ID); // Log the Item_ID

    // Check if Item_ID is provided
    if (!Item_ID) {
      return res.status(400).json({ message: "Item ID is required." });
    }

    // Fetch the item details from the database
    const item = await FindById({ Item_ID });

    if (!item) {
      return res.status(404).json({ message: "Item not found." });
    }

    // Return the item details in the response
    return res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching menu item:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getALLmenu = async (req, res) => {
  try {
    const menu = await GetAllMenu();
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json({
      message: "Menu fetched successfully",
      menu,
    });
  } catch (error) {
    console.error("Error fetching menu:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const fetchCategories = async (req, res) => {
  try {
    const rows = await Distinct_Category();
    const categories = rows.map((row) => row.Category);
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getRestaurantCategory = async (req, res) => {
  try {
    const { Restaurant_ID } = req.params;
    const categories = await Distinct_Restaurant_Category({ Restaurant_ID });
    if (!categories) {
      res.status(400).json({ message: "Restaurant ID is required." });
    }
    res
      .status(201)
      .json({ message: "Categories fetched Successfully", categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getRestaurantItems = async (req, res) => {
  try {
    const { Restaurant_ID } = req.params;

    if (!Restaurant_ID) {
      return res.status(400).json({ message: "Restaurant ID is required" });
    }
    const menu = await Get_Items_By_Restaurant({ Restaurant_ID });
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json({ message: "Menu fetched successfully", menu });
  } catch (error) {
    console.error("Error fetching menu:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

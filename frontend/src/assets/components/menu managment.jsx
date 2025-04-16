// import { useState } from "react";

import { Link } from "react-router-dom";

function MenuAdmin({ data }) {
  const {
    Item_ID,
    Name,
    Category,
    Price,
    Discount,
    Description,
    Availability,
  } = data;
  const handleDelete = async (Item_ID) => {
    try {
      const res = await fetch(
        `http://localhost:3000/menu/deleteItem/${Item_ID}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();
      console.log(data); // Should say "Item deleted successfully"

      if (res.ok) {
        alert("Item deleted successfully!");
        // Optional: refresh your list of items
      } else {
        alert(data.message || "Failed to delete item");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <>
      <tr key={Item_ID} className=" ">
        <td className="border-2 border-gray-500">{Item_ID}</td>
        <td className="border-2 border-gray-500">{Name}</td>
        <td className="border-2 border-gray-500">{Category}</td>
        <td className="border-2 border-gray-500">{Price}</td>
        <td className="border-2 border-gray-500 ">{Discount}</td>
        <td className="border-2 border-gray-500">{Description} </td>
        <td className="border-2 border-gray-500">{Availability}</td>
        <td className="border-2 border-gray-500 p-2">
          <div className=" flex gap-[5px]">
            <button
              className="bg-amber-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(Item_ID)}
            >
              Delete
            </button>

            <Link to={`/updateitem/${Item_ID}`}>
              <button className="bg-amber-500 text-white px-3 py-1 rounded">
                Update
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
}
export default MenuAdmin;

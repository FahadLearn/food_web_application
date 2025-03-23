import { useState } from "react";

function MenuAdmin({ data }) {
  const {
    id,
    item_name,
    category,
    price,
    discount_price,
    description,
    available,
  } = data;

  return (
    <>
      <tr key={id} className=" ">
        <td className="border-2 border-gray-500">{id}</td>
        <td className="border-2 border-gray-500">{item_name}</td>
        <td className="border-2 border-gray-500">{category}</td>
        <td className="border-2 border-gray-500">{price}</td>
        <td className="border-2 border-gray-500 ">{discount_price}</td>
        <td className="border-2 border-gray-500">{description} </td>
        <td className="border-2 border-gray-500">{available}</td>
        <td className="border-2 border-gray-500 p-2">
          <button
            className="bg-amber-500 text-white px-3 py-1 rounded"
            onClick={() => onDelete(id)}
          >
            Delete{" "}
          </button>
        </td>
      </tr>
    </>
  );
}
export default MenuAdmin;

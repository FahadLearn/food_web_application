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
            <button className="bg-amber-500 text-white px-3 py-1 rounded">
              Delete
            </button>
            <Link to="/updateitem">
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

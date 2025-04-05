import { Link } from "react-router-dom";
// import menu from "../../menu.json";
import MenuAdmin from "../components/menu managment";
import { useEffect, useState } from "react";

function MenuManagement() {
  const [menu, setmenu] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:3000/menu/getMenu", {
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);

        if (data && Array.isArray(data.data)) {
          setmenu(data.data);
        } else {
          console.error("Expected an array in data.data, but got:", data);
          setmenu([]);
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setmenu([]);
      }
    };
    fetchItems();
  }, []); // Empty dependency array to run only once on mount// Empty dependency array to run only once on mount
  return (
    <>
      <div className="border-2 w-[100%] h-[100vh]">
        <div className=" flex items-center justify-between  h-[80px] shadow-md">
          <div className=" font-semibold text-[25px] sm:text-[35px] md:text-[40px] lg:text-[40px] relative left-[10px] sm:left-[20px] md:left-[40px] lg:left-[50px]">
            Menu Management
          </div>
          <div className="relative right-[10px] sm:right-[20px] md:right-[40px] lg:right-[50px]">
            <Link
              to="/add_item"
              className="border-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] bg-amber-500 text-white rounded-[10px]"
            >
              Add item
            </Link>
          </div>
        </div>
        <div className="mt-[20px] flex  flex-col sm:flex-row items-center justify-center">
          <input
            type="text"
            name="search"
            className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
            placeholder="Search customer"
            required
          />
        </div>
        <table className="mt-[20px] w-[100%] bg-gray-200 border-gray-500 border-2">
          <thead>
            <tr className="bg-amber-500 text-white font-lighter ">
              <th className="w-[10%] border-2 border-gray-500">Id</th>
              <th className="w-[12%]  border-2 border-gray-500">Item Name</th>
              <th className="w-[10%]  border-2 border-gray-500">Category</th>
              <th className="w-[10%]  border-2 border-gray-500">Price</th>
              <th className="w-[10%]  border-2 border-gray-500">
                Discount Price
              </th>

              <th className="w-[25%]  border-2 border-gray-500">Description</th>
              <th className=" w-[10%]  border-2 border-gray-500">Available</th>
              <th className=" w-[10%]  border-2 border-gray-500">Edit</th>
            </tr>
          </thead>
          <tbody>
            {menu.length > 0 ? (
              menu.map((item) => <MenuAdmin key={item.Item_ID} data={item} />)
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No items found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MenuManagement;

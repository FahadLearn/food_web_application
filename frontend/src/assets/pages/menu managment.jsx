import { Link } from "react-router-dom";
import menu from "../../menu.json";
import MenuAdmin from "../components/menu managment";

function MenuManagement() {
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
                Didcount Price
              </th>

              <th className="w-[25%]  border-2 border-gray-500">Description</th>
              <th className=" w-[10%]  border-2 border-gray-500">Available</th>
              <th className=" w-[10%]  border-2 border-gray-500">Edit</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <MenuAdmin key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MenuManagement;

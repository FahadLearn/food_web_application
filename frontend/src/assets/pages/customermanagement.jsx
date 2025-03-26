import customer from "../../customer.json";
import Customers from "../components/customer managment";
function CustomersManagement() {
  return (
    <>
      <div className="">
        <div className="border-2 border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Customers Management
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
        <div className="border-2 overflow-x-auto w-full  mt-5">
          <table className="mt-[20px] w-full bg-gray-200 border-gray-500 border-2">
            <thead>
              <tr className="bg-amber-500 text-white font-lighter ">
                <th className="border-2 border-gray-500 text-[14px]">
                  Customer Id
                </th>
                <th className=" border-2 border-gray-500">Name</th>
                <th className=" border-2 border-gray-500">Address</th>
                <th className="  border-2 border-gray-500">Phone</th>
                <th className=" border-2 border-gray-500">Orders</th>

                <th className=" border-2 border-gray-500">Total Spent</th>
                <th className="  border-2 border-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {customer.map((item) => (
                <Customers key={item.id} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default CustomersManagement;

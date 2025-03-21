import order from "../../order.managment.json";
import Orders from "../components/ordermangment";
function OrdersManagement() {
  return (
    <>
      <div className="border-2">
        <div className="border-2 border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Order Management
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
              <th className="w-[10%] border-2 border-gray-500">Order ID</th>
              <th className="w-[12%]  border-2 border-gray-500">Customer</th>
              <th className="w-[25%]  border-2 border-gray-500">Address</th>
              <th className="w-[10%]  border-2 border-gray-500">Date</th>
              <th className="w-[10%]  border-2 border-gray-500">Total</th>

              <th className="w-[10%]  border-2 border-gray-500">Status</th>
              <th className=" w-[10%]  border-2 border-gray-500">Method</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <Orders key={item.id} data={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default OrdersManagement;

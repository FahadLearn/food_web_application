import order from "../../order.managment.json";
import Orders from "../components/ordermangment";
function OrdersManagement() {
  return (
    <>
      <div className="border-2">
        <table className="w-full border-collapse border border-red-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Total</th>

              <th className="border p-2">Status</th>
              <th className="border p-2">Method</th>
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

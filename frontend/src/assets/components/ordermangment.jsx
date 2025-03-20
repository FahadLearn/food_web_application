function Orders({ data }) {
  const { id, customer, address, date, total, status, method } = data;

  return (
    <>
      {/* <div className="border-2 "> */}
      <tr key={id} className=" ">
        <td className="border-2 border-gray-500">{id}</td>
        <td className="border-2 border-gray-500">{customer}</td>
        <td className="border-2 border-gray-500">{address}</td>
        <td className="border-2 border-gray-500">{date}</td>
        <td className="border-2 border-gray-500 ">{total}</td>
        <td className="border-2 border-gray-500">{status}</td>
        <td className="border-2 border-gray-500">{method}</td>
      </tr>
      {/* </div> */}
    </>
  );
}
export default Orders;

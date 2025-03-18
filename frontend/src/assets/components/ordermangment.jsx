function Orders({ data }) {
  const { id, customer, address, date, total, status, method } = data;

  return (
    <>
      {/* <div className="border-2 "> */}
      <tr key={id} className=" ">
        <td className="border-2">{id}</td>
        <td className="border-2">{customer}</td>
        <td className="border-2">{address}</td>
        <td className="border-2">{date}</td>
        <td className=" border-2">{total}</td>
        <td className="border-2">{status}</td>
        <td className="border-2">{method}</td>
      </tr>
      {/* </div> */}
    </>
  );
}
export default Orders;

function Customers({ data }) {
  const { id, name, address, phone, orders, totalSpent, status } = data;

  return (
    <>
      <tr key={id} className=" ">
        <td className="border-2 border-gray-500">{id}</td>
        <td className="border-2 border-gray-500">{name}</td>
        <td className="border-2 border-gray-500">{address}</td>
        <td className="border-2 border-gray-500">{phone}</td>
        <td className="border-2 border-gray-500 ">{orders}</td>
        <td className="border-2 border-gray-500">{totalSpent}</td>
        <td className="border-2 border-gray-500">{status}</td>
      </tr>
    </>
  );
}
export default Customers;

function PaymentAdmin({ data }) {
  const {
    paymentId,
    orderId,
    customerName,
    paymentMethod,
    amount,
    status,
    dateTime,
  } = data;

  return (
    <>
      <tr key={paymentId} className=" ">
        <td className="border-2 border-gray-500">{paymentId}</td>
        <td className="border-2 border-gray-500">{orderId}</td>
        <td className="border-2 border-gray-500">{customerName}</td>
        <td className="border-2 border-gray-500">{paymentMethod}</td>
        <td className="border-2 border-gray-500 ">{amount}</td>
        <td className="border-2 border-gray-500">{status}</td>
        <td className="border-2 border-gray-500 ">{dateTime}</td>
      </tr>
    </>
  );
}
export default PaymentAdmin;

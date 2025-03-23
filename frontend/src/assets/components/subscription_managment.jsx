function SubscriptionAdmin({ data }) {
  const { id, name, email, plan, startDate, endDate, paymentStatus, status } =
    data;

  return (
    <>
      <tr key={id} className=" ">
        <td className="border-2 border-gray-500">{id}</td>
        <td className="border-2 border-gray-500">{name}</td>
        <td className="border-2 border-gray-500">{email}</td>
        <td className="border-2 border-gray-500">{plan}</td>
        <td className="border-2 border-gray-500 ">{startDate}</td>
        <td className="border-2 border-gray-500">{endDate}</td>
        <td className="border-2 border-gray-500 ">{paymentStatus}</td>
        <td className="border-2 border-gray-500 ">{status}</td>
      </tr>
    </>
  );
}
export default SubscriptionAdmin;

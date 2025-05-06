import { useState } from "react";
import { useCart } from "../../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const savedTotal = sessionStorage.getItem("totalAmount");

  const [formdata, setFormData] = useState({
    Full_Name: "",
    Address: "",
    Phone_Number: "",
    Payment_Method: "",
    Total_Ammount: savedTotal || "", // ✅ default from session
  });

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formdata,
          items: cart.map((item) => ({
            Restaurant_ID: item.Restaurant_ID,
            Item_ID: item.Item_ID,
            Quantity: item.quantity,
            Price: item.Price,
          })),
        }),
      });

      const data = await res.json();
      console.log("Order response:", data);
      alert("Order placed successfully!");

      // Clear form and cart
      setFormData({
        Full_Name: "",
        Address: "",
        Phone_Number: "",
        Payment_Method: "",
        Total_Ammount: "",
      });
      clearCart();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="text-center font-semibold text-[30px] md:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
        Checkout
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center h-[87vh]">
          <div className="flex flex-col gap-[10px] w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
            <div className="flex justify-center">
              <input
                type="text"
                name="Full_Name"
                onChange={handleChange}
                value={formdata.Full_Name}
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] pt-[15px] pb-[15px] px-[20px]"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="Address"
                onChange={handleChange}
                // value={formdata.Address}
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] pt-[15px] pb-[15px] px-[20px]"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="Phone_Number"
                onChange={handleChange}
                // value={formdata.Mobile_Number}
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] px-[20px]"
                placeholder="Mobile Number"
                required
              />
              <select
                name="Payment_Method"
                onChange={handleChange}
                value={formdata.Payment_Method}
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] px-[20px] appearance-none"
                required
              >
                <option value="" disabled>
                  Select Payment Method
                </option>
                <option value="Credit/Debit">Credit/Debit</option>
                <option value="Jazz Cash">Jazz Cash</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="Total_Ammount"
                // onChange={handleChange}
                value={formdata.Total_Ammount}
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] px-[20px]"
                placeholder="Total Amount"
                required
              />
            </div>
          </div>
          <div className="flex justify-center pt-[30px] pb-[30px]">
            <button
              type="submit"
              className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-amber-500 text-white pt-[15px] pb-[15px] px-[45px] rounded-full"
            >
              Order Complete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

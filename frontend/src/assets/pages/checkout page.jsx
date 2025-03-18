import { useState } from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";

function Checkout() {
  const [showCreditSection, setShowCreditSection] = useState(false);
  const [showJazzCashSection, setShowJazzCashSection] = useState(false);

  const handlePaymentChange = (e) => {
    const selected = e.target.value;
    setShowCreditSection(selected === "Credit/Debit");
    setShowJazzCashSection(selected === "Jazz Cash");
  };
  return (
    <>
      <div className=" ">
        <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Checkout
        </div>
        <div className="mt-[50px] sm:mt-[100px] justify-center flex flex-col gap-[10px] w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
          <div className="flex justify-center">
            <input
              type="text"
              name=" address"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="first_name"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Last Name"
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="mobile_number"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Mobile Number"
              required
            />
            <input
              type="text"
              name="postal_code"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Postal Code"
              required
            />
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <select
              name="payment"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              onChange={handlePaymentChange}
              defaultValue=""
            >
              <option value="" disabled selected>
                Select Payment Method
              </option>
              <option value="Credit/Debit">Credit/Debit</option>
              <option value="Jazz Cash">Jazz Cash</option>
              <option value="Cash On Delivery">Cash On Delivery</option>
            </select>
            <select
              name="Tip"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
            >
              <option value="" disabled selected>
                Tip Your Rider
              </option>
              <option value="Not Now">Not Now</option>
              <option value="Rs.50.00">Rs.50.00</option>
              <option value="Rs.100.00">Rs.100.00</option>
              <option value="Rs.200.00">Rs.200.00</option>
              <option value="Rs.300.00">Rs.300.00</option>
            </select>
          </div>
        </div>

        {/* Credit/Debit Payment Section */}
        <div
          className={`  mt-[10px] h-[60vh] sm:h-[35vh] flex flex-col items-center justify-center overflow-hidden transition-all duration-500  w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto  ${
            showCreditSection
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {showCreditSection && (
            <div className="  mx-auto ">
              <div className=" flex flex-col gap-[10px]">
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-amber-600 font-semibold text-center">
                  Enter Card Details
                </h2>
                <div className=" flex justify-center ">
                  <input
                    type="text"
                    name="card_number"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Enter Card Number"
                    required
                  />
                </div>
                <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px] ">
                  <input
                    type="text"
                    name="expiry_date"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Expiry Date MM/YY"
                    required
                  />
                  <input
                    type="text"
                    name="cvc"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="CVC"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Jazz Cash Payment Section */}
        <div
          className={`  mt-[10px] h-[30vh]  flex flex-col items-center justify-center overflow-hidden transition-all duration-500  w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto ${
            showJazzCashSection
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {showJazzCashSection && (
            <div className="">
              <div className=" flex flex-col gap-[10px]">
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-amber-600 font-semibold text-center">
                  Enter Jazz Cash Details
                </h2>
                <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
                  {" "}
                  <input
                    type="text"
                    name="expiry_date"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Expiry Date MM/YY"
                    required
                  />
                  <input
                    type="text"
                    name="expiry_date"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Expiry Date MM/YY"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center sm:mt-[30px] pt-[30px] pb-[30px]">
          <Link className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-amber-500 text-white pt-[15px] pb-[15px] pl-[45px] pr-[45px] rounded-full">
            Order Complete
          </Link>
        </div>
      </div>
    </>
  );
}
export default Checkout;

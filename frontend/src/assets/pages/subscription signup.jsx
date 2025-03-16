import { Link } from "react-router-dom";
import { useState } from "react";
function Subscription_Signup() {
  const [formData, SetformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    address: "",
    payment_method: "",
    card_no: "",
    cvc_no: "",
    expiry_date: "",
  });
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="w-[100%]  h-[140vh] sm:h-[100vh] flex flex-col justify-center gap-[40px]">
        <div className=" text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Subscribe & Enjoy Delicious Meals!
        </div>
        <form>
          <div className=" flex flex-col gap-[10px]">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="first_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="First Name"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="last_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Last Name"
                onChange={handleState}
                required
              />
            </div>
            <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="email"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter your Email"
                onChange={handleState}
                required
              />
              <input
                type="tel"
                name="phone_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone No"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name=" address"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Address"
                onChange={handleState}
                required
              />
            </div>
            <div className="  flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="payment_method"
                onChange={handleState}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]  appearance-none"
              >
                <option value="">Select Payment Method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
              </select>
              <input
                type="tel"
                name=" card_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Card No"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="tel"
                name=" cvc_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="CVC Code"
                onChange={handleState}
                required
              />
              <input
                type="Date"
                name="expiry_date"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Expiry Date"
                onChange={handleState}
                required
              />
            </div>
          </div>

          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
            <Link>
              <input
                type="Submit"
                value="Submit"
                onChange={handleState}
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Subscription_Signup;

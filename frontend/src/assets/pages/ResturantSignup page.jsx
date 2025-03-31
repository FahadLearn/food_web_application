import { useState } from "react";
function RestaurantSignup() {
  const [formData, SetformData] = useState({
    first_name: "",
    last_name: "",
    phone_no: "",
    cnic: "",
    business_name: "",
    business_type: "",
    email: "",
    password: "",
    city: "",
    province: "",
    area: "",
    postal_code: "",
    address: "",
    legal_1: "",
    legal_2: "",
    bank_account_owner_title: "",
    bank_name: "",
    iban_number: "",
  });

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="w-[100%] h-[230vh]  sm:h-[160vh] flex flex-col justify-center gap-[40px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Ready to grow Your business
        </div>
        <form>
          <div className="  flex flex-col gap-[10px]">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="First_Name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="First Name"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="Last_Name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Last Name"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="tell"
                name="phone_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone NUmber"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="cnic"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="CNIC"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="business-name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter your Business Name"
                onChange={handleState}
                required
              />
              <select
                name="business_type"
                onChange={handleState}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Business Type
                </option>
                <option value="Shop">Shop</option>
                <option value="Restaurant">Restaurant</option>
                <option value=" HomeBased">HomeBased</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="email"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Business Email"
                onChange={handleState}
                required
              />
              <input
                type="password"
                name="password"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Password"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="city"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Your City"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="province"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Your province"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="area"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Area"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="postal_code"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Postal Code"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name=" address"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Business Name and Address"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="legal_1"
                onChange={handleState}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Do you have a operating license?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="legal_2"
                onChange={handleState}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Is your business register with pakistani federal bureau of
                  revenue?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="bank_account_owner_title"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Bank Account Owner/Title"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="bank_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Bank Name"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name="iban_number"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="IBAN Number"
                onChange={handleState}
                required
              />
            </div>
          </div>

          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[40px]">
            <input
              type="Submit"
              value="Submit"
              className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
            />
          </div>
        </form>
      </div>
    </>
  );
}
export default RestaurantSignup;

import { useState } from "react";
import { Link } from "react-router-dom";

function RestaurantProfile() {
  const [formData, SetformData] = useState({
    First_Name: "",
    Last_Name: "",
    Business_Name: "",
    Email: "",
    Password: "",
    Business_Type: "",
    Phone_Number: "",
    City: "",
    Province: "",
    Area: "",
    Postal_Code: "",
    Detail_Address: "",
    CNIC: "",
    License: "",
    FBR: "",
    Account_Title: "",
    Bank_Name: "",
    IBAN: "",
  });
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
        My Profile
      </div>
      <div className="relative top-[50px] flex flex-col gap-[5px]">
        <div className=" h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]   md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] rounded-full mx-auto">
          <img
            src="/images/profile pic.webp"
            className="size-full object-fit rounded-full"
          />
        </div>
        <div className=" font-semibold text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
          Your Name
        </div>
        <div className="text-center">Your ID</div>
      </div>
      <form>
        <div className=" mt-[80px]  flex flex-col gap-[10px]">
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="First_Name"
              value={formData.First_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="First Name"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Last_Name"
              value={formData.Last_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Last Name"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="tell"
              name="Phone_Number"
              value={formData.Phone_Number}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Phone Number"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="CNIC"
              value={formData.CNIC}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="CNIC"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="Business_Name"
              value={formData.Business_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter your Business Name"
              onChange={handleState}
              required
            />
            <select
              name="Business_Type"
              value={formData.Business_Type}
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
              name="Email"
              value={formData.Email}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Business Email"
              onChange={handleState}
              required
            />
            <input
              type="password"
              name="Password"
              value={formData.Password}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Password"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="City"
              value={formData.City}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Your City"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Province"
              value={formData.Province}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Your province"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="Area"
              value={formData.Area}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Your Area"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Postal_Code"
              value={formData.Postal_Code}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Postal Code"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center">
            <input
              type="text"
              name="Detail_Address"
              value={formData.Detail_Address}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Your Business Name and Address"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <select
              name="License"
              onChange={handleState}
              value={formData.License}
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
              name="FBR"
              value={formData.FBR}
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
              name="Account_Title"
              value={formData.Account_Title}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Bank Account Owner/Title"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Bank_Name"
              value={formData.Bank_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Bank Name"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center">
            <input
              type="text"
              name="IBAN"
              value={formData.IBAN}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="IBAN Number"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]  pt-[40px] pb-[40px]">
            <Link to="">
              <input
                type="Submit"
                value="Delete Account"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
            <Link to="">
              <input
                type="Submit"
                value="Save information"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
export default RestaurantProfile;

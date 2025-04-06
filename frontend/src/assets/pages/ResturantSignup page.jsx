import { useState } from "react";
function RestaurantSignup() {
  const [formData, SetformData] = useState({
<<<<<<< HEAD
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
=======
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
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
  });

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
<<<<<<< HEAD
=======
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/restaurant/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Successfully Registered");
        alert("Successfully Registered!");

        SetformData({
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
      } else {
        alert("Failed to register, please try again.");
      }
    } catch (error) {
      console.error("Error in registration:", error);
      alert("Failed to register due to a network error.");
    }
  };

>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
  return (
    <>
      <div className="w-[100%] h-[230vh]  sm:h-[160vh] flex flex-col justify-center gap-[40px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Ready to grow Your business
        </div>
<<<<<<< HEAD
        <form>
=======
        <form onSubmit={handleSubmit}>
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
          <div className="  flex flex-col gap-[10px]">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="First_Name"
<<<<<<< HEAD
=======
                value={formData.First_Name}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="First Name"
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="Last_Name"
<<<<<<< HEAD
=======
                value={formData.Last_Name}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Last Name"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="tell"
<<<<<<< HEAD
                name="phone_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone NUmber"
=======
                name="Phone_Number"
                value={formData.Phone_Number}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone Number"
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                onChange={handleState}
                required
              />
              <input
                type="text"
<<<<<<< HEAD
                name="cnic"
=======
                name="CNIC"
                value={formData.CNIC}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="CNIC"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
<<<<<<< HEAD
                name="business-name"
=======
                name="Business_Name"
                value={formData.Business_Name}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter your Business Name"
                onChange={handleState}
                required
              />
              <select
<<<<<<< HEAD
                name="business_type"
=======
                name="Business_Type"
                value={formData.Business_Type}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
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
<<<<<<< HEAD
                name="email"
=======
                name="Email"
                value={formData.Email}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Business Email"
                onChange={handleState}
                required
              />
              <input
                type="password"
<<<<<<< HEAD
                name="password"
=======
                name="Password"
                value={formData.Password}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Password"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
<<<<<<< HEAD
                name="city"
=======
                name="City"
                value={formData.City}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Your City"
                onChange={handleState}
                required
              />
              <input
                type="text"
<<<<<<< HEAD
                name="province"
=======
                name="Province"
                value={formData.Province}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Your province"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
<<<<<<< HEAD
                name="area"
=======
                name="Area"
                value={formData.Area}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Area"
                onChange={handleState}
                required
              />
              <input
                type="text"
<<<<<<< HEAD
                name="postal_code"
=======
                name="Postal_Code"
                value={formData.Postal_Code}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Postal Code"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
<<<<<<< HEAD
                name=" address"
=======
                name="Detail_Address"
                value={formData.Detail_Address}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Business Name and Address"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
<<<<<<< HEAD
                name="legal_1"
                onChange={handleState}
=======
                name="License"
                onChange={handleState}
                value={formData.License}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
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
<<<<<<< HEAD
                name="legal_2"
=======
                name="FBR"
                value={formData.FBR}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
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
<<<<<<< HEAD
                name="bank_account_owner_title"
=======
                name="Account_Title"
                value={formData.Account_Title}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Bank Account Owner/Title"
                onChange={handleState}
                required
              />
              <input
                type="text"
<<<<<<< HEAD
                name="bank_name"
=======
                name="Bank_Name"
                value={formData.Bank_Name}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Bank Name"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
<<<<<<< HEAD
                name="iban_number"
=======
                name="IBAN"
                value={formData.IBAN}
>>>>>>> 366449e053b29f49f2b5fdad87006a5aa4fe4929
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

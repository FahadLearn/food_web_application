import { useState } from "react";
import { Link } from "react-router-dom";

function RiderProfile() {
  const [formData, SetformData] = useState({
    First_Name: "",
    Last_Name: "",
    City: "",
    Vehicle: "",
    Cnic: "",
    Phone_No: "",
    Date_of_Birth: "",
    License: "",
    Payment_Method: "",
    Account_Title: "",
    Email: "",
    Password: "",
  });

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className=" ">
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
          <div className="mt-[80px]  flex flex-col gap-[10px]">
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
                type="email"
                name="Email"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter your email"
                onChange={handleState}
                required
              />
              <input
                type="password"
                name="Password"
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
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter City"
                onChange={handleState}
                required
              />
              <select
                name="Vehicle"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="" disabled selected>
                  Select a vehicle
                </option>
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="License"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="License"
                onChange={handleState}
                required
              />

              <input
                type="text"
                name="Date_of_Birth"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Date of Birth"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="Payment_Method"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="" disabled selected>
                  Select payment method
                </option>
                <option value="easypaisa">Easy Paisa</option>
                <option value="Jazzcash">Jazz Cash</option>
              </select>

              <input
                type="text"
                name="Cnic"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="CNIC"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="tel"
                name="Phone_No"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone no"
                onChange={handleState}
                required
              />

              <input
                type="text"
                name="Account_Title"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="account_title"
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
      </div>
    </>
  );
}
export default RiderProfile;

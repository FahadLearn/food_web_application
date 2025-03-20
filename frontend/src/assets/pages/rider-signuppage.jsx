import { useState } from "react";
import { Link } from "react-router-dom";

function RiderSignup() {
  const [formData, SetformData] = useState({
    first_name: "",
    last_name: "",
    city: "",
    vehicle: "",
    cnic: "",
    phone_no: "",
    payment_method: "",
    account_title: "",
  });
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="w-[100%]  h-[142vh] sm:h-[100vh] flex flex-col justify-center gap-[40px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Start Your Journey as a Rider
        </div>
        <form>
          <div className="  flex flex-col gap-[10px]">
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
                name="city"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter City"
                required
              />
              <select
                name="vehicle"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
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
                name="license"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="License"
                required
              />

              <input
                type="text"
                name="date_of_birth"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Date of Birth"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="payment_method"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Select payment method
                </option>
                <option value="Easy Paisa">Easy Paisa</option>
                <option value="Jazz Cash">Jazz Cash</option>
              </select>

              <input
                type="text"
                name="cnic"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="CNIC"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="tel"
                name="phone_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone no"
                required
              />

              <input
                type="text"
                name="account_title"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="account_title"
                required
              />
            </div>
          </div>

          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
            <Link to="/riderdashbaord">
              <input
                type="Submit"
                value="Submit"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default RiderSignup;

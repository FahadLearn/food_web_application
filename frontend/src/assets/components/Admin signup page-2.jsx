import { useState } from "react";
import { Link } from "react-router-dom";

function RestaurantSignup2() {
  const [formData, SetformData] = useState({
    business_name: "",

    business_type: "",
    business_category: "",
    branch_no: "",
    cuisine: "",
    Phone_no: "",
  });

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="w-[100%] h-[100vh]  flex flex-col justify-center gap-[40px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Tell us about your Business
        </div>
        <form>
          <div className="  flex flex-col gap-[10px] ">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="business_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Business Name"
                onChange={handleState}
                required
              />
              <select
                name="business_type"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="" disabled selected>
                  Business Type
                </option>
                <option value="Shop">Shop</option>
                <option value="Restaurant">Restaurant</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="business_category"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="" disabled selected>
                  Business Category
                </option>
                <option value="Home based<">Home based</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Restaurant">Restaurant</option>
              </select>
              <input
                type="text"
                name="branch_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Branch Number"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="cuisine"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="" disabled selected>
                  Cuisine
                </option>
                <option value="FastFood">FastFood</option>
                <option value="Chinese">Chinese</option>
                <option value="Desi">Desi</option>
              </select>
              <input
                type="tell"
                name="Phone_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone Number"
                onChange={handleState}
                required
              />
            </div>
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
            <Link to="/admin_signup_page_3">
              <input
                type="Submit"
                value="Next"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default RestaurantSignup2;

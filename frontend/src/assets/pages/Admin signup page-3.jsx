import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSignup3() {
  const [formData, SetformData] = useState({
    city: "",
    province: "",
    area: "",
    postal_code: "",
    address: "",
    additional_address: "",
  });

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent page reload
  //   fetch("http://localhost:3000/api/restaurant", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Fetch error:", error));
  //   console.log(formData);
  // };

  return (
    <>
      <div className=" w-[100%]  sm:h-[100vh]  flex flex-col justify-center gap-[30px]">
        <div className="pt-[30px]  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Where is your business located?
          <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            Rider will use this to find your business for pickup and delivery
          </div>
        </div>

        <form>
          <div className="  flex flex-col gap-[10px] ">
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
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name="   additional_address"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Additional Address"
                onChange={handleState}
                required
              />
            </div>
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[10px] sm:top-[30px] pt-[20px] pb-[20px]">
            <Link to="/admin_signup_page_4">
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
export default AdminSignup3;

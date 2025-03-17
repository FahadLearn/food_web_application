import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSignup4() {
  const [formData, SetformData] = useState({
    first_name: "",
    last_name: "",
    cnic: "",
    email: "",
    business_type: "",
    number: "",
  });

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Fetch error:", error));
    console.log(formData);
  };

  return (
    <>
      <div className="w-[100%] h-[142vh] sm:h-[100vh]  flex flex-col justify-center gap-[30px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          The Legal Stuff
          <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            We need yo verify your Business
          </div>
        </div>
        <form>
          <div className="  flex flex-col gap-[10px] ">
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
                name="cnic"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter CNIC"
                required
              />
              <select
                name="business_type"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
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
                name="business_type"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Is your business part of a listed company in stock exchnge?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="business_type"
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
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
            <Link to="/admin_signup_page_5">
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
export default AdminSignup4;

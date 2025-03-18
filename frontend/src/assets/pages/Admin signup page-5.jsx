import { useState } from "react";
import { Link } from "react-router-dom";

function AdminSignup5() {
  const [formData, SetformData] = useState({
    bank_account_owner_title: "",
    bank_name: "",
    iban_number: "",
    business_owner_id_license: "",
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
      <div className="w-[100%] h-[120vh] sm:h-[100vh]  flex flex-col justify-center gap-[40px]">
        <div className="w-[330px] sm:w-[100%] mx-auto  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Add your bank details to receive payments
          <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            Your details are secure and encrypted with us
          </div>
        </div>
        <form>
          <div className="  flex flex-col gap-[10px] ">
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
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name="business_owner_id_license"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Business Owner ID/License"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="file"
                accept="image/*"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                onChange={handleState}
                required
              />
              <input
                type="file"
                accept="image/*"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                onChange={handleState}
                required
              />
            </div>
            <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
              Upload Your ID Card pic front back both
            </div>
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
            <Link to="/restaurantDashboard">
              <input
                type="Submit"
                value="Submit"
                onChange={handleSubmit}
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default AdminSignup5;

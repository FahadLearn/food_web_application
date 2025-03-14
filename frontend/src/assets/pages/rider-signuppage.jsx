import { useState } from "react";

function RiderSignup() {
  const [formData, SetformData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    address: "",
    vehicle_type: "",
    vehicle_number: "",
    driving_license_number: "",
  });
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    fetch("http://localhost:3000/api/rider", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Fetch error:", error));
  };
  return (
    <>
      <div className="w-[100%] h-[170vh] sm:h-[120vh]">
        <div className="w-[100%] h-[100%]">
          <form onSubmit={handleSubmit}>
            <div className="relative top-[45px] flex flex-col  justify-center gap-[50px] mx-auto h-[100%] w-[90%] sm:w-[80%] md:w-[75%] lg:w-[62%]">
              <div className="text-center text-amber-500 font-semibold relative top-[20px] sm:top-[0px] w-[280px] sm:w-[100%]  text-[30px] sm:text-[27px] md:text-[32px] lg:text-[35px] mx-auto">
                Start Your Journey as a Delivery Rider
              </div>
              <div className="flex flex-col gap-[10px] sm:gap-[15px] w-[100%] ">
                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center  gap-[10px] ">
                  <input
                    type="text"
                    name="name"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[240px] md:w-[280px]  lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Name"
                    onChange={handleState}
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center   gap-[10px]">
                  <input
                    type="text"
                    name="email"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[240px] md:w-[280px]  lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Email"
                    onChange={handleState}
                  />
                  <input
                    type="password"
                    name="password"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[240px] md:w-[280px]  lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Password"
                    onChange={handleState}
                  />
                </div>

                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center   gap-[10px] ">
                  <input
                    type="Number"
                    name="phone"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[240px] md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Phone Number"
                    onChange={handleState}
                  />
                  <input
                    type="text"
                    name="city"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="City"
                    onChange={handleState}
                  />
                </div>

                <div className="flex justify-center items-center">
                  <input
                    type="text"
                    name="address"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[490px] md:w-[570px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Address"
                    onChange={handleState}
                  />
                </div>

                <div className="relative  flex flex-col sm:flex sm:flex-row sm:justify-center items-center  gap-[10px]">
                  <select
                    className="rounded-[30px] text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none "
                    placeholder="vehicle  type "
                    name="vehicle_type"
                    onChange={handleState}
                  >
                    <option value="" disabled selected>
                      Choose your vehicle
                    </option>
                    <option value="bike">Motorbike</option>
                    <option value="bicycle">Bicycle</option>
                    <option value="car">Car</option>
                    <option value="other">Other</option>
                  </select>

                  <input
                    type="text"
                    name="vehicle_number"
                    className="rounded-[30px]  text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                    onChange={handleState}
                    placeholder="Enter your vehicle number"
                  />
                </div>

                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center   gap-[10px]">
                  <input
                    type="text"
                    name="driving_license_number"
                    className="rounded-[30px] text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                    placeholder="Enter your driving license number"
                    onChange={handleState}
                  />
                  {/* <input
                    type="file"
                    accept="image/*"
                    className="rounded-[30px] text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                    onChange={handleState}
                  /> */}
                </div>
              </div>
              <div className="w-[100%] ">
                <div className="flex justify-center items-center">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="bg-amber-500 outline-none text-white font-semibold rounded-[30px] bg-[#ECECEC] text-[20px] w-[300px] sm:w-[490px] md:w-[560px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]  cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default RiderSignup;

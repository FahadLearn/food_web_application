import { useState } from "react";

function AdminSignup() {
  const [formData, SetformData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    address: "",
    cuisine_type: "",
    status: "",
    opening_hours: "",
    closing_hours: "",
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
      <div className="w-[100%] h-[175vh] sm:h-[120vh]">
        <div className="w-[100%] h-[100%] ">
          <form onSubmit={handleSubmit}>
            <div className=" relative top-[45px] flex flex-col  gap-[50px] mx-auto h-[100%] w-[90%] sm:w-[80%] md:w-[75%] lg:w-[62%]">
              <div className="text-center text-amber-500 font-semibold relative top-[20px] sm:top-[0px] w-[300px] sm:w-[100%]  text-[30px] sm:text-[27px] md:text-[32px] lg:text-[35px] mx-auto">
                Welcome! Create Your Admin Account
              </div>
              <div className="flex flex-col gap-[10px] sm:gap-[15px] w-[100%] ">
                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center  gap-[10px] ">
                  <input
                    type="text"
                    name="name"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[490px] md:w-[570px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                    placeholder="Name"
                    onChange={handleState}
                  />
                </div>

                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center   gap-[10px]">
                  <input
                    type="email"
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
                    name="cuisine_type"
                    className="rounded-[30px] text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none "
                    placeholder="Cuisine Type"
                    onChange={handleState}
                  >
                    <option value="">Select Cuisine</option>
                    <option value="fast-food">Fast Food</option>
                    <option value="italian">Italian</option>
                    <option value="chinese">Chinese</option>
                    <option value="indian">Indian</option>
                    <option value="desserts">Desserts</option>
                  </select>

                  <select
                    name="status"
                    className="rounded-[30px]  text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                    onChange={handleState}
                    placeholder="Status"
                  >
                    <option value="">Select Status</option>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center   gap-[10px]">
                  <input
                    type="time"
                    name="opening_hours"
                    className="rounded-[30px] text-gray-500 bg-[#ECECEC] text-[16px] outline-none w-[300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                    placeholder="Opening Hour"
                    onChange={handleState}
                  />
                  <input
                    type="time"
                    name="closing_hours"
                    className="rounded-[30px] text-gray-500 bg-[#ECECEC] text-[16px] outline-none w- [300px] sm:w-[240px]  md:w-[280px] lg:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                    placeholder="Closing Hour"
                    onChange={handleState}
                  />
                </div>
              </div>
              <div className="w-[100%] ">
                <div className="flex justify-center items-center  ">
                  <input
                    type="submit"
                    className=" bg-amber-500 outline-none text-white font-semibold rounded-[30px] bg-[#ECECEC] text-[20px] w-[300px] sm:w-[490px] md:w-[560px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]  cursor-pointer"
                    value="Create Account"
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
export default AdminSignup;

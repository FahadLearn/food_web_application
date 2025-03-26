import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

function RiderSignup() {
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
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    // Add your API call here
    try {
      const response = await fetch("http://localhost:3000/Rider/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setMessage(data.message || "Registration successful! plz login"); // ✅ Success message
        navigate("/Sign_In");
      } else {
        setMessage(data.message || "Failed to register, please try again."); // ✅ Error message
      }
    } catch (error) {
      console.error("❌ Error in registration:", error.message);
      setMessage("Failed to register, please try again later."); // ✅ Handle network errors
    }
  };
  return (
    <>
      <div className="w-[100%]  h-[170vh] sm:h-[100vh] flex flex-col justify-center gap-[40px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Start Your Journey as a Rider
        </div>
        <form onSubmit={handleSubmit}>
          <div className="  flex flex-col gap-[10px]">
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
                type="date"
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
          </div>
          {message ? <p>{message}</p> : null}
          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
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
export default RiderSignup;

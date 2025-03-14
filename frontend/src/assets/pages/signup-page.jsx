// import Btn from "../components/input button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../api/user";
function SignUp() {
  const [formData, SetformData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
    Phone_Number: "",
  });
  const [error, setError] = useState("");
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    const result = await Register(formData);
    if (result.success) {
      navigate("/Sign_In");
    } else {
      setError(result.error || "Something went wrong!");
    }
  };
  return (
    <>
      <div className="h-[100vh] w-[100%] ">
        <div className="h-[100%] w-[100%] ">
          <div className="flex flex-col justify-center  lg:h-[100%] lg:w-[50%] md:h-[100%] md:w-[50%] sm:h-[100%] sm:w-[60%]  h-[100%] w-[90%] mx-auto  gap-[20px]  ">
            <div className=" w-[100%]  flex flex-col gap-[2px] ">
              <div className="text-[30px] text-center font-bold text-amber-500">
                Food Delivery
              </div>
              <div className="text-[25px] text-center text-amber-500">
                Sign Up
              </div>
              <div className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-center  text-amber-600">
                Fill up the details
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className=" gap-[10px] w-[100%] sm:gap-[10px]  md:gap-[10px]   flex flex-col items-center lg:gap-[10px] ">
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Name"
                  onChange={handleState}
                />
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px] ] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Email"
                  onChange={handleState}
                />
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Password"
                  onChange={handleState}
                />{" "}
                <input
                  type="tel"
                  name="Phone_Number"
                  value={formData.Phone_Number}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Phone Number"
                  onChange={handleState}
                />
                <input
                  type="text"
                  name="Address"
                  value={formData.Address}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Address"
                  onChange={handleState}
                />
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <div className="w-[100%] top-[40px] flex flex-col items-center  relative ">
                  <input
                    type="submit"
                    value="Signup"
                    className="bg-amber-500 outline-none text-white font-semibold rounded-[30px] bg-[#ECECEC] text-[20px] w-[300px] sm:w-[490px] md:w-[560px] lg:w-[250px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]  cursor-pointer"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;

// import Btn from "../components/input button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { universalLogin } from "../api/universalLogin";
// import { Admin_login, User_Login } from "../api/user";
function SignIn() {
  const [formData, SetformData] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [message, setmessage] = useState(null);
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.Email) {
      setError("Enter Your Email");
    }
    if (!formData.Password) {
      setError("Enter your password");
    }
    try {
      const result = await universalLogin(formData);
      if (result.success) {
        switch (result.userType) {
          case "Admin":
            navigate("/menu_page");
            break;
          case "Customer":
            navigate("/menu_page");
            break;
          case "Rider":
            navigate("/riderdashbaord");
            break;
          case "Restaurant":
            navigate("/restaurantDashboard");
            break;
          default:
            setError("Unrecognized user type.");
        }
      } else {
        setError(result.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong during login.");
    }
  };

  return (
    <>
      <div className="h-[100vh] w-[100%] ">
        <div className="h-[100%] w-[100%] ">
          <div className="flex flex-col justify-center   lg:h-[100%] lg:w-[50%] md:h-[100%] md:w-[50%] sm:h-[100%] sm:w-[60%]  h-[100%] w-[90%] mx-auto  gap-[20px]">
            <div className="w-[100%]  flex flex-col gap-[2px] ">
              <div className="text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px] text-center font-bold text-amber-500">
                Food Delivery
              </div>
              <div className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px] text-center text-amber-500">
                Sign In
              </div>
              <div className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-center  text-amber-600">
                Enter your Email and Password
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className=" gap-[10px]  w-[100%] sm:gap-[10px]  md:gap-[10px]   flex flex-col items-center lg:gap-[10px] ">
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[280px] sm:w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Email"
                  onChange={handleState}
                />
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]   w-[280px] sm:w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Password"
                  onChange={handleState}
                />
                <div className="left-[80px] text-[10px] sm:left-[80px] sm:text-[10px] md:text-[12px] md:left-[80px] md:tracking-[1px] lg:text-[12px] lg:tracking-[1px] text-[#A6A6A6] font-semibold relative lg:left-[80px]">
                  Forgot password?
                </div>
              </div>
              <div className="w-[100%] top-[50px] sm:top-[50px]  md:top-[50px] flex flex-col items-center  relative lg:top-[50px]  ">
                <input
                  type="submit"
                  value="Login"
                  className="bg-amber-500 outline-none text-white font-semibold rounded-[30px] bg-[#ECECEC] text-[20px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]  cursor-pointer"
                />
              </div>
              {error && (
                <p className="text-red-600 font-medium mt-3 text-center">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;

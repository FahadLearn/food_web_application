import { Link } from "react-router-dom";
import Btn from "../components/input button";
function Sign() {
  return (
    <>
      <div className="h-[100vh] w-[100%] ">
        <div className="h-[100%] w-[100%] ">
          <div className="flex flex-col justify-center  lg:h-[100%] lg:w-[50%] md:h-[100%] md:w-[50%] sm:h-[100%] sm:w-[60%]  h-[100%] w-[90%] mx-auto   gap-[15px]">
            <div className=" w-[100%]   flex flex-col ">
              <div className="text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px] text-center font-bold text-amber-500">
                <Link to="/">Food Delivery</Link>
              </div>
              <div className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px] text-center text-amber-500">
                Hello
              </div>
              <div className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] text-center  text-amber-600">
                Login to your account
              </div>
            </div>
            <div className=" w-[100%]  flex flex-col items-center gap-[20px]  ">
              <Btn text="Sign In" to="/Sign_IN" />
              <Btn text="Sign Up" to="/Sign_UP" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sign;

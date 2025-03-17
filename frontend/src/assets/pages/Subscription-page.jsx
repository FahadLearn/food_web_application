import Header from "../components/Header";
import Footer from "../components/footer";
import Button from "../components/button";
import { Link } from "react-router-dom";

function Subscription() {
  return (
    <>
      <Header />

      <div className=" w-[100%] h-[40vh] sm:h-[60vh] bg-amber-500 flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-[5px]">
          <h1 className="text-center font-bold text-white text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
            Get Exclusive Discounts & Free Deliveries!
          </h1>
          <p className="text-center text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
            Join our subscription plans and save money on every order.
          </p>
          <div className=" flex justify-center relative top-[10px] sm:top-[40px]">
            <Button
              text="Choose a plan"
              bgColor="bg-white "
              border="border-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-[20px] ">
        <div className="text-center text-[30px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-semibold">
          Choose your plan
        </div>
        <div className="mt-[20px] sm:mt-[20px] md:mt-[25px] lg:mt-[35px] items-center flex flex-col sm:flex-row justify-center gap-[30px] sm:gap-[10px] lg:gap-[20px] w-[100%] h-[120vh] sm:h-[45vh] md:h-[50vh] lg:h-[57vh]">
          <div className="flex flex-col justify-center gap-[10px] md:gap-[13px] w-[55%]  sm:w-[32%]  lg:w-[27%] h-[100%] rounded-[10px]  [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
            <h2 className=" font-bold text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Basic Plan
            </h2>
            <p className="text-gray-600 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              $9.99/month
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ Free delivery on orders over $30
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ Access to select menu items
            </p>
            <p className="text-gray-700  sm:text-[12px] "> </p>
            <div className="flex justify-center relative sm:top-[17px] ">
              <Link to="/subscription_signup">
                <Button
                  text="Subscribe"
                  bgColor="bg-amber-500"
                  border="border-amber-500"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-[7px] md:gap-[9px]  w-[55%] sm:w-[32%] lg:w-[27%] h-[100%] rounded-[10px]  [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
            <h2 className=" font-bold text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Standard Plan
            </h2>
            <p className="text-gray-600 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              $19.99/month
            </p>
            <p className="text-gray-700  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center ">
              ✔ Free delivery on orders over $30
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  text-center">
              ✔ 5% discount on menu items
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px]  md:text-[14px] lg:text-[16px] text-center">
              ✔ Exclusive offers
            </p>
            <div className=" flex justify-center relative sm:top-[15px] ">
              <Link to="/subscription_signup">
                <Button
                  text="Subscribe"
                  bgColor="bg-amber-500"
                  border="border-amber-500"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[7px] md:gap-[9px]  w-[55%] sm:w-[32%]  lg:w-[27%] h-[100%] rounded-[10px] [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
            <h2 className=" font-bold text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Standard Plan
            </h2>
            <p className="text-gray-600 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              $19.99/month
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ Free delivery on orders over $30
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ 5% discount on menu items
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px]  md:text-[14px] lg:text-[16px] text-center">
              ✔ Exclusive offers
            </p>
            <div className="flex justify-center relative sm:top-[15px] ">
              <Link to="/subscription_signup">
                <Button
                  text="Subscribe"
                  bgColor="bg-amber-500"
                  border="border-amber-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px] h-[52vh] sm:h-[35vh] bg-gray-200 flex flex-col items-center justify-center gap-[25px] ">
        <div className="text-center font-bold text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px]">
          Why Choose Us?
        </div>
        <div className=" flex-col sm:flex-row flex justify-center items-center gap-[20px]">
          <div className="[box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]  bg-white rounded-[5px] text-center  font-semibold md:text-[18px] lg:text-[20px] w-[250px] sm:w-[180px] md:w-[200px] lg:w-[250px] pt-[20px] pb-[20px] hover:bg-amber-500 hover:text-white duration-400">
            24/7 Support
          </div>
          <div className="[box-shadow:0px_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-[5px] text-center font-semibold lg:text-[20px]  w-[250px] sm:w-[180px] md:w-[200px] lg:w-[250px] pt-[20px] pb-[20px] hover:bg-amber-500 hover:text-white duration-400">
            High Security
          </div>
          <div className="[box-shadow:0px_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-[5px] text-center font-semibold lg:text-[20px]  w-[250px] sm:w-[180px] md:w-[200px] lg:w-[250px] pt-[20px] pb-[20px] hover:bg-amber-500 hover:text-white duration-400">
            Affordable Plans
          </div>
        </div>
      </div>

      <div className="mt-[15px] flex justify-center items-center h-[40vh] bg-amber-500">
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-bold text-white text-[30px] sm:text-[35px]  md:text-[35px] lg:text-[40px]">
            Ready to Get Started?
          </h2>
          <div className="flex justify-center">
            <Link
              to="/subscription_signup"
              className=" bg-white text-amber-500 font-semibold  pt-[15px] pb-[15px] pl-[40px] pr-[40px] rounded-[30px]"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex flex-col gap-[15px]">
        <div className=" text-center  font-bold text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px]">
          Your Feedback Matters
        </div>
        <div className=" flex justify-center items-center">
          <input
            type="text"
            className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[490px] md:w-[570px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
            placeholder="Write your feedback here..."
          />
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className=" bg-amber-500 text-[20px] text-white font-semibold  pt-[15px] pb-[15px] pl-[40px] pr-[40px] rounded-[30px]"
          >
            Submit
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Subscription;

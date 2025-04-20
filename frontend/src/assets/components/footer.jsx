import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="mt-[40px] w-[100%] h-[60vh] sm:h-[50vh] bg-[#212121] absolute -z-10 ">
        <div className="flex flex-col sm:flex-row  justify-center items-center sm:gap-[15px] w-[100%] h-[90%]  ">
          <div className=" w-[100%] sm:w-[15%] lg:w-[12%] ">
            <div className="block w-[200px]  mx-auto sm:hidden font-bold text-amber-500 text-[20px] ">
              Foodies
            </div>
            <div className="flex sm:flex-col justify-center flex-row gap-[10px] sm:gap-[20px] w-[100%] h-[80%]  ">
              <div className="hidden sm:block sm:w-[60%]  font-bold text-amber-500 text-[20px] lg:text-[30px]">
                Foodies
              </div>

              <div className="w-[180px] sm:w-[120px] text-[12px] sm:text-[9px] md:text-[10px] md:w-[120px]  text-[#BBBBBB] relative  ">
                Our job is to filling your tummy with delicious food and with
                fast and free delivery.
              </div>
              <div className="flex  sm:flex-row flex-col sm:w-[100%] sm:h-[10%] gap-[10px] sm:gap-[10px] ">
                <FaInstagram className="text-[#424242] " />
                <FaFacebook className="text-[#424242] " />
                <FaTwitter className="text-[#424242] " />
              </div>
            </div>
          </div>
          <div className=" sm:flex sm:justify-center w-[50%] h-[50%] hidden sm:block sm:flex-row ">
            <div className="  w-[30%] ">
              <div className=" text-white sm:text-[14px] md:text-[16px]  font-semibold">
                Company
              </div>
              <div className="relative sm:top-[15px]  flex flex-col sm:gap-[5px]  sm:w-[100%] sm:h-[60%]">
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  About us
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Team
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Careers
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Blogs
                </a>
              </div>
            </div>
            <div className=" w-[30%]">
              <div className=" text-white sm:text-[14px]  md:text-[16px] font-semibold">
                Contact
              </div>
              <div className="relative sm:top-[15px]  flex flex-col sm:gap-[5px]  sm:w-[100%] sm:h-[60%]">
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Help & Support
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Partner with us
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Ride with us
                </a>
              </div>
            </div>
            <div className="w-[20%] ">
              <div className=" text-white sm:text-[14px] md:text-[16px] font-semibold">
                Legal
              </div>
              <div className="relative sm:top-[15px]  flex flex-col sm:gap-[5px]  sm:w-[100%] sm:h-[60%]">
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Terms & Conditions
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Refund & Cancellation
                </a>
                <a href="#" className="text-white sm:text-[9px] md:text-[10px]">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="mt-[10px] sm:mt-[0px] h-[50%]">
            <div className="w-[100%] h-[100%] ">
              <div className=" sm:text-[14px] md:text-[18px] font-semibold text-[#BBBBBB]  sm:w-[100%] relative   sm:-top-[4px]">
                Get in Touch
              </div>
              <div className=" sm:w-[100%] sm:h-[20%]  flex flex-col sm:gap-[7px] relative top-[8px]">
                <a href="#" className=" sm:text-[10px] text-white ">
                  Question or feedback?
                </a>
                <a href="#" className=" sm:text-[10px] text-white ">
                  We’d love to hear from you
                </a>
              </div>
              <div className="relative top-[26px] sm:w-[100%] sm:h-[20%]  flex ">
                <form action="" method="">
                  <input
                    type="text"
                    className=" relative  text-[12px] text-[#ADADAD] outline-none bg-[#424242] pt-[10px] pb-[10px] pl-[5px] pr-[5px] rounded-[5px] w-[130px] md:w-[150px]"
                    placeholder="Enter your email"
                  />
                </form>
                <div className=" w-[100%] h-[20%] block sm:hidden relative top-[5px] left-[20px]">
                  <a
                    href="#"
                    className="  relative  pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[12px] rounded-[5px] bg-amber-500 text-white transition relative before:absolute before:top-[8px] before:-left-[7px] before:w-[80px] before:h-[25px] before:bg-amber-500 before:-z-1 before:opacity-[0.35] before:rounded-[9px] before:blur-[10px]
 "
                  >
                    Submit
                  </a>
                </div>
              </div>
              <div className="relative top-[45px] sm:w-[100%] sm:h-[20%] hidden sm:block">
                <a
                  href="#"
                  className="  relative  pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[12px] rounded-[5px] bg-amber-500 text-white transition relative before:absolute before:top-[8px] before:-left-[7px] before:w-[80px] before:h-[25px] before:bg-amber-500 before:-z-1 before:opacity-[0.35] before:rounded-[9px] before:blur-[10px]
 "
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:border-t-2 sm:border-[#424242] text-center sm:text-[10px] text-[#424242]  sm:pt-[3px] sm:pb-[3px]">
          All rights Reserved copyright Your Company, 2025
        </div>
      </div>
    </>
  );
}
export default Footer;

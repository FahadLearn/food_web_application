import { Link } from "react-router-dom";
function RiderAccount() {
  return (
    <>
      <div className="h-[100vh]">
        <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Account
        </div>
        <form>
          <div className=" h-[87vh] flex flex-col justify-center items-center">
            <div className=" flex flex-col gap-[10px]">
              <div className=" flex  flex-col sm:flex-row items-center justify-center">
                <input
                  type="text"
                  name="Name"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Name"
                  required
                />
              </div>
              <div className=" flex  flex-col sm:flex-row items-center justify-center">
                <input
                  type="text"
                  name="email"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="password"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Password"
                  required
                />
                <input
                  type="text"
                  name="phone_number"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="active_contract"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Active Contract"
                  required
                />
                <input
                  type="text"
                  name="joined_at"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Joined at"
                  required
                />
              </div>
            </div>
            <div className="flex  flex-col sm:flex-row items-center justify-center  pt-[20px] pb-[20px] gap-[10px]">
              <Link to="">
                <input
                  type="Submit"
                  value="Delete Account"
                  className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                />
              </Link>
              <Link to="">
                <input
                  type="Submit"
                  value="Save information"
                  className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default RiderAccount;

import { Link } from "react-router-dom";

function RiderProfile() {
  return (
    <>
      <div className="h-[140vh] sm:h-[120vh]">
        <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          My Profile
        </div>
        <div className="relative top-[50px] flex flex-col gap-[5px]">
          <div className=" h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]   md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] rounded-full mx-auto">
            <img
              src="/images/profile pic.webp"
              className="size-full object-fit rounded-full"
            />
          </div>
          <div className=" font-semibold text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
            Your Name
          </div>
          <div className="text-center">Your ID</div>
        </div>
        <div className="relative top-[80px]  flex flex-col gap-[10px]">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[10px]">
            <Link to="/rideraccount">
              <div className=" h-[150px] w-[200px] rounded-[10px] flex items-center justify-center bg-gray-200 shadow-md">
                <div className=" text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-semibold">
                  Account
                </div>
              </div>
            </Link>
            <div className=" h-[150px] w-[200px] rounded-[10px] flex items-center justify-center bg-gray-200 shadow-md">
              <Link>
                <div className=" text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-semibold">
                  Vehicles
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[10px]">
            <div className="  h-[150px] w-[200px] rounded-[10px] flex items-center justify-center bg-gray-200 shadow-md">
              <Link>
                <div className=" text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-semibold">
                  Id Card
                </div>
              </Link>
            </div>
            <div className="  h-[150px] w-[200px] rounded-[10px] flex items-center justify-center bg-gray-200 shadow-md ">
              <Link>
                <div className=" text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-semibold ">
                  Driver License
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RiderProfile;

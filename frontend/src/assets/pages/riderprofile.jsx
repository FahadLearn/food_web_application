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
      </div>
    </>
  );
}
export default RiderProfile;

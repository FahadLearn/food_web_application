import { Link } from "react-router-dom";

function RiderProfile() {
  return (
    <>
      <div className=" ">
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
        <form>
          <div className=" mt-[65px]  flex flex-col justify-center items-center ">
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
              <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
                <select
                  name="vehicle"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                >
                  <option value="" disabled selected>
                    Select a vehicle
                  </option>
                  <option value="bike">Bike</option>
                  <option value="scooter">Scooter</option>
                </select>
                <input
                  type="text"
                  name="date_of_birth"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Date of Birth"
                  required
                />
              </div>
              <div className="text-[16px] text-amber-600 pl-[12px] ">
                Enter front pic of Id card
              </div>
              <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Upload Img"
                  required
                />
                <input
                  type="text"
                  name="id_card"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="IdCard Number"
                  required
                />
              </div>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]  pt-[40px] pb-[40px]">
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
export default RiderProfile;

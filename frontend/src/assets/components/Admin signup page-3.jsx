function RestaurantSignup3() {
  return (
    <>
      <div className=" w-[100%] h-[90vh] sm:h-[70vh]  flex flex-col justify-center gap-[30px]">
        <div className="pt-[30px]  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Where is your business located?
          <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            Rider will use this to find your business for pickup and delivery
          </div>
        </div>

        <form>
          <div className="  flex flex-col gap-[10px] ">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="city"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Your City"
                required
              />
              <input
                type="text"
                name="province"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Your province"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="area"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Area"
                required
              />
              <input
                type="text"
                name="postal_code"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Postal Code"
                required
              />
            </div>

            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name=" address"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Business Name and Address"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name="   additional_address"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Additional Address"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default RestaurantSignup3;

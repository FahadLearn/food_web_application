function RestaurantSignup4() {
  return (
    <>
      <div className=" w-[100%] h-[70vh]  flex flex-col justify-center gap-[30px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          The Legal Stuff
          <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            We need yo verify your Business
          </div>
        </div>
        <form>
          <div className="  flex flex-col gap-[10px] ">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="cnic"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter CNIC"
                required
              />
              <select
                name="business_type"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Do you have a operating license?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="business_type"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Is your business part of a listed company in stock exchnge?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="business_type"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Is your business register with pakistani federal bureau of
                  revenue?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default RestaurantSignup4;

function RestaurantSignup1({ formData, onChange }) {
  const {
    First_Name,
    Last_Name,
    Business_Name,
    Business_Email,
    Password,
    Business_Type,
    Phone_Number,
  } = formData;
  return (
    <>
      <div className=" w-[100%] h-[100vh] sm:h-[70vh]  flex flex-col justify-center gap-[40px]">
        <div className="  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Ready to grow Your business
        </div>
        <form>
          <div className="  flex flex-col gap-[10px] ">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="First_Name"
                value={First_Name}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last_name"
                value={Last_Name}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Last Name"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="Business_Name"
                value={Business_Name}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Business Name"
                required
              />
              <input
                type="text"
                name="Business_Email"
                value={Business_Email}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Business Email"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="Business_Type"
                value={Business_Type}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
              >
                <option value="" disabled selected>
                  Business Type
                </option>
                <option value="Shop">Shop</option>
                <option value="Restaurant">Restaurant</option>
              </select>
              <input
                type="tell"
                name="Phone_Number"
                value={Phone_Number}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Mobile Number"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default RestaurantSignup1;

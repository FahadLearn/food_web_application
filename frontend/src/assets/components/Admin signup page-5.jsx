// import { Link } from "react-router-dom";

function RestaurantSignup5({ formData, onChange }) {
  const { Account_Title, Bank_Name, IBAN, Owner_ID } = formData;
  return (
    <>
      <div className="w-[100%] h-[120vh] sm:h-[100vh]  flex flex-col justify-center gap-[40px]">
        <div className="w-[330px] sm:w-[100%] mx-auto  text-center font-semibold text-amber-600 text-[23px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
          Add your bank details to receive payments
          <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
            Your details are secure and encrypted with us
          </div>
        </div>
        <form>
          <div className="  flex flex-col gap-[10px] ">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="Account_Title"
                value={Account_Title}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Bank Account Owner/Title"
                required
              />
              <input
                type="text"
                name="Bank_Name"
                value={Bank_Name}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Bank Name"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name="IBAN"
                value={IBAN}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="IBAN Number"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center">
              <input
                type="text"
                name="Owner_ID"
                value={Owner_ID}
                onChange={onChange}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Business Owner ID/License"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="file"
                accept="image/*"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                required
              />
              <input
                type="file"
                accept="image/*"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                required
              />
            </div>
            <div className="mx-auto w-[300px] sm:w-[100%]  text-center font-semibold text-amber-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
              Upload Your ID Card pic front back both
            </div>
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center relative top-[30px]">
            <Link to="/restaurantDashboard">
              <input
                type="Submit"
                value="Submit"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default RestaurantSignup5;

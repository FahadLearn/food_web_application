import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      <div className=" h-[100vh] ">
        <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Checkout
        </div>
        <div className="flex flex-col justify-center h-[87vh] ">
          <div className="justify-center flex flex-col gap-[10px] w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto =">
            <div className="flex justify-center">
              <input
                type="text"
                name="full_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name=" address"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Your Address"
                required
              />
            </div>

            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="mobile_number"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Mobile Number"
                required
              />
              <select
                name="payment"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                defaultValue=""
              >
                <option value="" disabled selected>
                  Select Payment Method
                </option>
                <option value="Credit/Debit">Credit/Debit</option>
                <option value="Jazz Cash">Jazz Cash</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
              </select>
            </div>
            <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="total_amount"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Total Amount"
                required
              />
            </div>
          </div>

          <div className="flex justify-center  pt-[30px] pb-[30px]">
            <Link className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] bg-amber-500 text-white pt-[15px] pb-[15px] pl-[45px] pr-[45px] rounded-full">
              Order Complete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;

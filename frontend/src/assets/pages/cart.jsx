import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className=" w-[100%] h-[114vh]">
        <div className="border-2 border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Order Summary
        </div>
        <div className=" w-[100%] h-[80vh] flex flex-col justify-center">
          <div className="text-center font-semibold text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px]">
            Hungry?
          </div>
          <div className="text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px]">
            You haven't added anything to your cart!
          </div>
        </div>
        <div className="bg-[#ECECEC]  flex justify-center gap-[100px] pt-[10px] pb-[10px]">
          <div className=" text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px]">
            Total (incl. fees and tax)
          </div>
          <div className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px]">
            Rs. 0
          </div>
        </div>
        <div className="bg-[#ECECEC]  flex justify-center pt-[20px] pb-[20px] ">
          <Link
            to="/checkoutpage"
            className="border-2 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] pt-[10px] pb-[10px] pl-[8px] pr-[8px] hover:bg-amber-500 rounded-[10px] text-white hover:border-amber-500 bg-[#808080] duration-200 "
          >
            Review your payment and address
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cart;

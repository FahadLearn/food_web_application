import { useNavigate } from "react-router-dom";
import AddCart from "./add cart";
// import cart from "../../cart.json";
import { useCart } from "../../context/CartContext";
// import { useEffect, useState } from "react";

function Cart() {
  const Navigate = useNavigate();
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.Price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    sessionStorage.setItem("totalAmount", totalPrice.toFixed(2)); // ✅ Save total
    Navigate("/checkoutpage");
  };
  return (
    <>
      <div className=" w-[100%] ">
        <div className="border-2 border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Order Summary
        </div>
        <div className=" ">
          {cart.map((item) => (
            <AddCart key={item.Item_ID} data={item} />
          ))}
        </div>
        {/* <div className=" w-[100%] h-[80vh] flex flex-col justify-center">
          <div className="text-center font-semibold text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px]">
            Hungry?
          </div>
          <div className="text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px]">
            You haven't added anything to your cart!
          </div>
        </div> */}
        <div className="bg-[#ECECEC]  flex justify-center gap-[100px] pt-[10px] pb-[10px]">
          <div className=" text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px]">
            Total (incl. fees and tax)
          </div>
          <div className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px]">
            Rs. {totalPrice.toFixed(2)}
          </div>
        </div>
        <div className="bg-[#ECECEC]  flex justify-center pt-[20px] pb-[20px] ">
          <div
            className="border-2 text-[16px] sm:text-[16px]
            md:text-[18px] lg:text-[18px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]
            hover:bg-amber-500 rounded-[10px] text-white hover:border-amber-500
            bg-[#808080] duration-200 "
            onClick={handleCheckout}
          >
            {" "}
            Review your payment and address
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;

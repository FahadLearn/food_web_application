import { Link } from "react-router-dom";
import { useState } from "react";

function ItemDescription() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <>
      <div className=" w-[100%] h-[100vh]">
        <div className="flex flex-col justify-center items-center h-[100%] lg:w-[50%]  md:w-[70%]  sm:w-[80%]   w-[100%] mx-auto ">
          <div className="  w-[380px] h-[230px] sm:w-[490px]">
            <img src="/images/birani.webp" className="size-full object-cover" />
          </div>
          <div className=" w-[380px]  sm:w-[490px] pt-[10px] pb-[10px] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] font-semibold">
            Chicken Biryani
          </div>
          <div className=" w-[380px]  sm:w-[490px]  text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] font-semibold">
            RS. 300
          </div>
          <div className="  w-[380px]  sm:w-[490px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] ">
            Biryani is a flavorful, aromatic, and layered rice dish originating
            from the Indian subcontinent, typically featuring meat (chicken,
            lamb, or goat), rice (usually basmati), and a medley of spices,
            herbs, and fried onions
          </div>

          <div className="relative top-[20px] flex  justify-center gap-[10px] w-[380px]  sm:w-[490px]">
            <div className="flex items-center  justify-center gap-[10px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-semibold bg-amber-500 text-white w-[200px] pt-[10px] pb-[10px] rounded-full">
              <div onClick={increment}>+</div>
              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-bold">
                {count}
              </div>
              <div onClick={decrement}>-</div>
            </div>
            <div className="flex items-center  justify-center w-[200px]">
              <Link
                to="/cart"
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-semibold bg-amber-500 text-white  pt-[10px] pb-[10px] pl-[50px] pr-[50px] rounded-full"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemDescription;

import { Link } from "react-router-dom";
import Links from "./links";
import Sidebar from "./sidebar";
import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p className=" bg-zinc-900 py-1 sm:h-8 text-slate-50 text-xs text-center object-cover object-center sm:text-sm  sm:py-1  md:text-sm md:h-9 md:py-2  lg:text-base lg:h-10">
        {/* offer */}
        Free shipping on all orders over 1000PKR
      </p>
      <div className=" h-12 flex items-center justify-between shadow-lg shadow-slate-500/50 sm:h-20  sm:shadow-none  md:h-24  lg:h-28">
        {/* header */}
        <div className=" relative left-5 sm:opacity-0  h-[20px] w-[25px] ">
          {/* left */}
          <Sidebar />
        </div>
        <div className="sm:h-16  sm:flex sm:flex-col sm:items-center md:h-20 lg:h-24 ">
          {/* center */}
          <Link
            to="/"
            className="hidden sm:block  sm:w-12 sm:h-10 md:w-16 md:h-16 lg:h-20  lg:w-20 lg:h-16 "
          >
            <img src="/public/images/pic1.png" className="w-full h-full" />
          </Link>
          <div className="md:relative md:bottom-1 lg:relative lg:bottom-1.5 ">
            <Link
              to="/"
              className="font-(family-name:--font1) text-xl font-semibold sm:text-2xl sm:font-semibold md:tracking-[1.7px] md:text-3xl md:font-semibold lg:text-4xl lg:font-semibold text-zinc-900"
            >
              Food Delivery
            </Link>
          </div>
        </div>
        <div className="relative right-5 sm:border-2 sm:border-black sm:opacity-0 ">
          {/* right */}

          <div className=" w-7 h-7 sm:opacity-0  ">
            <a href="#" className="">
              <img src="/public/images/Bag.png" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
      <div className=" border-y-2 border-zinc-900 hidden sm:flex  sm:items-center sm:justify-around sm:block sm:h-[50px]  md:block md:flex md:items-center md:justify-around  md:h-[60px] lg:block  lg:flex  lg:items-center lg:justify-around lg:h-[70px]">
        <div className="hover:border-2 hover:border-zinc-900 sm:w-[135px]  hidden sm:block sm:flex sm:items-center sm:justify-center md:block md:w-[155px] md:flex md:items-center md:justify-center lg:block lg:flex  lg:items-center lg:justify-center lg:w-[175px]">
          <div className=" sm:h-[17px] sm:w-[17px] lg:h-[20px] lg:w-[20px]">
            <a href="#">
              <img
                src="/public/images/Vector.png"
                className=" sm:size-full md:size-full"
              />
            </a>
          </div>
          <div className="">
            <form action="" method="">
              <input
                type="text"
                className="sm:text-[12px] sm:w-[100px] sm:h-[25px] sm:outline-none sm:pr-[8px] sm:pl-[5px] md:w-[120px] md:outline-none md:pr-[0px] md:pl-[5px] md:text-[14px] md:h-[35px] lg:text-[16px] lg:w-[130px] lg:h-[45px] lg:outline-none lg:pl-[5px] lg:pr-[0px]"
                placeholder="Search....."
              />
            </form>
          </div>
        </div>
        <div className="sm:gap-2  hidden sm:block sm:flex sm:items-center sm:justify-center md:gap-3 md:block md:flex md:items-center md:justify-center lg:block lg:flex  lg:items-center lg:justify-center">
          <Links text="Home" to="/" />
          <Links text="Menu" />
          <Links text="Subscription" to="/subscription" />
          <Links text="Contact" to="/contact" />
          <Links text="About" to="/about" />
        </div>
        <div className="sm:gap-1 sm:w-[135px]  hidden sm:block sm:flex sm:items-center sm:justify-center md:block md:gap-1  md:w-[145px] md:flex md:items-center md:justify-center lg:block lg:flex  lg:items-center lg:justify-center lg:w-[175px] lg:gap-1 ">
          <div className=" sm:h-[30px] sm:w-[30px] sm:relative sm:left-[4px] md:h-[35px] md:w-[35px] md:relative md:left-[4px]  lg:h-[40px] lg:w-[40px] lg:relative lg:left-[4px] ">
            <img
              src="/public/images/icon1.png"
              className="sm:size-full md:size-full lg:size-full"
            />
          </div>
          <Link
            to="/Sign"
            className=" sm:text-[12px] md:text-[14px] lg:text-[16px]"
          >
            Login
          </Link>
          <a
            href="#"
            className=" sm:text-[12px] md:text-[14px] lg:text-[16px]"
            onClick={handleCount}
          >
            Cart ({count})
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

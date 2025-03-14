import { Link } from "react-router-dom";

function PartnerShip({ src, text, h1, h2, btn, to }) {
  return (
    <>
      <div className="h-[49%] w-[85%] relative sm:w-[45%] sm:h-[100%] md:h-[100%] md:w-[45%] lg:h-[100%] lg:w-[45%] bg-cover bg-contain bg-no-repeat bg-center ">
        <div className=" w-[100%] h-[100%]">
          <img
            src={src}
            className="object-center object-center size-full rounded-[10px]"
          />
        </div>
        <div className="absolute top-[0px] w-[100%] h-[100%] left-[0px] bg-gradient-to-r from-black/80 to-black/20  rounded-[10px]"></div>
        <div className="pt-[2px] pb-[2px] pr-[20px] pl-[20px] text-[12px] left-[30px] font-semibold absolute top-[0px] bg-white sm:text-[12px] sm:pt-[2px] sm:pb-[2px] sm:pr-[15px] sm:pl-[15px] rounded-b-[5px] sm:left-[20px] md:text-[14px] md:pt-[3px] md:pb-[3px] md:pr-[25px] md:pl-[25px] md:left-[40px] lg:text-[16px] lg:pt-[4px] lg:pb-[4px] lg:pr-[30px] lg:pl-[30px] lg:left-[45px]">
          {text}
        </div>
        <div className="top-[65px] w-[100%] h-[70%] absolute sm:top-[60px] sm:w-[100%] sm:h-[65%]  md:top-[75px] ">
          <div className="top-[31px] pl-[33px] text-[10px] text-amber-500 tracking-[1px] sm:font-medium sm:text-[10px] sm:tracking-[1px] relative sm:top-[15px] sm:pl-[17px] md:text-[12px]  md:pl-[37px] md:top-[20px] md:tracking-[1px] lg:text-[16px]  lg:top-[45px] lg:pl-[40px]">
            {h1}
          </div>
          <div className="top-[27px] pl-[30px] text-[26px] sm:text-[24px] text-white font-bold relative sm:pl-[15px] sm:top-[11px] md:text-[32px]  md:pl-[35px] md:top-[16px] lg:text-[40px] lg:top-[40px]  lg:pl-[39px]">
            {h2}
          </div>
          <div className="top-[35px] pl-[30px] sm:pl-[15px] relative sm:top-[23px]  md:pl-[35px] md:top-[38px] lg:top-[60px] lg:pl-[39px]">
            <Link
              to={to}
              className="pt-[5px] pb-[5px] pl-[18px] pr-[18px] text-[12px] bg-amber-500 text-white sm:text-[11px] sm:pt-[6px] sm:pb-[6px] sm:pl-[20px] sm:pr-[20px] rounded-full relative md:text-[12px] md:pt-[8px] md:pb-[8px] md:pl-[30px] md:pr-[30px] lg:text-[14px] lg:pt-[9px] lg:pb-[9px] lg:pl-[35px] lg:pr-[35px]"
            >
              {btn}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default PartnerShip;

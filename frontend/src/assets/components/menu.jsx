function Menu({ t1, t2, t3, src }) {
  return (
    <>
      <div className=" flex flex-col gap-[10px] items-center w-[40%] sm:w-[40%] sm:gap-[10px]   md:w-[45%] md:gap-[13px]  lg:rounded-[10px] lg:w-[40%] lg:gap-[16px]">
        {/* lg:border-black shadow-lg shadow-black-500/50 */}
        <div className="w-[70px] h-[70px] sm:w-[70px] h-[70px]  md:w-[90px] md:h-[90px]">
          <img src={src} className=" size-full " />
        </div>
        <div className=" text-[16px] font-bold sm:text-[16px]  md:text-[18px] lg:text-[20px]">
          {t1}
        </div>
        <div className=" text-[9px] text-center  w-[150px]  relative -top-[7px] sm:text-[9px] sm:w-[150px] sm:-top-[7px]   md:text-[11px] md:w-[180px]  lg:text-[12px] lg:w-[190px] ">
          {t2}
        </div>
        <div className=" text-amber-500 text-[12px] font-semibold sm:text-[12px]  md:text-[14px]">
          <a href="#" className="">
            {t3}
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;

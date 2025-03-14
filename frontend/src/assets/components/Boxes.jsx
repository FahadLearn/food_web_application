function Boxes({ src, heading, para }) {
  return (
    <>
      <div className="w-[30%] rounded-[10px] sm:w-[27%] flex flex-col items-center justify-center  gap-[4px] sm:flex sm:flex-col sm:gap-[4px] sm:rounded-[10px] sm:items-center sm:justify-center sm:shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] md:w-[25%] md:gap-[4px] lg:w-[24%] lg:shadow-none lg:gap-[4px]">
        <div className="w-[90%] h-[50%] sm:w-[80%] sm:h-[45%]  md:w-[85%] md:h-[50%] lg:w-[90%] lg:h-[53%]">
          <img src={src} className="size-full object-contain" />
        </div>
        <div className="text-[14px] text-center font-semibold top-[4px] sm:text-[20px]  sm:font-semibold sm:text-center relative sm:top-[4px]  md:text-[24px] md:top-[4px] md:font-semibold  lg:text-[26px] lg:top-[4px]">
          {heading}
        </div>
        <div className="text-[8px] text-center w-[115px] sm:text-[10px] sm:text-center sm:w-[170px] sm:tracking-[1px] relative top-[1px] md:w-[180px] md:text-[10px] md:tracking-[1px] lg:text-[12px] lg:tracking-[1.5px] lg:w-[230px]">
          {para}
        </div>
      </div>
    </>
  );
}
export default Boxes;

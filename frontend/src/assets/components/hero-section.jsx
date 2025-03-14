import Button from "./button";
import "./style.css";
function HeroSection() {
  return (
    <>
      <div
        className="w-[100%] h-[50vh] bg-cover bg-no-repeat bg-center sm:h-[60vh] md:h-[70vh] lg:h-[90vh] lg:w-full  "
        style={{
          backgroundImage: `linear-gradient(rgba(154, 147, 147, 0.50), rgba(154, 147, 147, 0.50)), url('/images/backg.png')`,
        }}
      >
        <div className=" flex flex-col justify-center items-center size-full gap-1 sm:size-full sm:gap-1 md:size-full md:gap-2 lg:gap-2  lg:size-full  ">
          <div className=" text-[30px] font-semibold w-[230px] font-(family-name:--font1) text-center relative leading-[1.2]  sm:text-[38px] sm:w-[300px] sm:top-[0px] md:top-[0px] md:text-[45px] md:w-[340px] lg:text-[55px] lg:w-[450px] lg:top-[0px]">
            Food delivery to your home
          </div>
          <p className=" text-[10px]  text-center w-[237px]  relative  sm:text-[13px]  sm:top-[0px] sm:w-[300px]  md:top-[0px] md:text-[15px]  md:w-[340px] lg:text-[19px] lg:w-[450px] lg:top-[0px]">
            savor every flavor without leaving home. Delicious food, just a
            click away.
          </p>
          <div className="flex  justify-center gap-2 relative top-[3px] sm:top-[8px]  md:top-[12px] lg:top-[15px]">
            <Button
              text="Order Now"
              bgColor="bg-amber-500"
              color="text-white"
              border="border-amber-500"
            />
            <Button text="Explore More" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

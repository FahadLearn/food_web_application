import Boxes from "./Boxes";

function Section() {
  return (
    <>
      <div className="mt-[50px]">
        <div className="font-(family-name:--font3) text-center text-[10px] text-amber-600 font-semibold sm:text-[12px] md:text-[14px] lg:text-[16px]">
          WHAT WE SERVE
        </div>
        <div className="font-(family-name:--font3) font-bold text-[20px] w-[200px] text-center mx-auto mt-[5px] text-zinc-900 sm:text-[25px] sm:w-[250px] sm:mt-[10px] md:text-[30px] md:w-[290px] md:mt-[15px] lg:text-[40px] lg:w-[400px] lg:mt-[15px]">
          Your Favorite Food Delivery Partner
        </div>
        <div className=" flex justify-center gap-[10px] w-[100%] h-[40vh] sm:mt-[25px] sm:h-[40vh]  sm:w-[100%] sm:gap-[15px] sm:flex sm:justify-center  md:mt-[35px] md:h-[50vh] md:w-[100%] md:gap-[20px]  lg:w-[100%] lg:h-[55vh] lg:gap-[20px]">
          <Boxes
            src="/images/image111.png"
            heading="Easy to order"
            para="You only need a few steps in ordering food"
          />
          <Boxes
            src="/images/image22.png"
            heading="Fastest delivery"
            para="Delivery that is always ontime even faster"
          />
          <Boxes
            src="/images/image3.png"
            heading="Best quality"
            para="Not only fast for us quality is also number one"
          />
        </div>
      </div>
    </>
  );
}
export default Section;

import Menu from "./menu";

function MenuSection() {
  return (
    <>
      <div className=" mt-[60px]">
        <div className="text-[25px] text-center font-medium sm:text-[30px] md:text-[35px] lg:text-[40px] font-(family-name:--font1)">
          Browse Our Menu
        </div>
        <div className="mt-[70px] flex flex-col w-[100%] h-[80vh]  sm:h-[40vh] sm:w-[100%]  sm:flex sm:flex-row  md:h-[50vh]  lg:justify-center lg:items-center lg:h-[55vh] mt-[40px]">
          <div className="  flex justify-center gap-[10px]  w-[100%] h-[50%]  sm:h-[100%] sm:w-[100%] sm:gap-[0px] sm:justify-around lg:justify-around  ">
            <Menu
              src="/public/images/breakfast.png"
              t1="Breakfast"
              t2="Every breakfast brings energy and joy, filling life with flavor. Healthy food supports us, while delightful treats create happiness."
              t3="Explore menu"
            />
            <Menu
              src="/public/images/dishe.png"
              t1="Main Dishes"
              t2="Every meal brings energy and joy, filling life with flavor. Healthy food supports us, while delightful treats create happiness."
              t3="Explore menu"
            />
          </div>
          <div className="flex justify-center gap-[10px]  w-[100%] h-[50%]   sm:h-[100%] sm:w-[100%] sm:gap-[0px] sm:justify-around lg:lg:justify-around ">
            <Menu
              src="/public/images/drinks.png"
              t1="Drinks"
              t2="Every drinks brings energy and joy, filling life with flavor. Healthy food supports us, while delightful treats create happiness."
              t3="Explore menu"
            />
            <Menu
              src="/public/images/dd.png"
              t1="Desserts"
              t2="Every sweet brings energy and joy, filling life with flavor. Healthy food supports us, while delightful treats create happiness."
              t3="Explore menu"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuSection;

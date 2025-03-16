import { Link } from "react-router-dom";

function MenuManagement() {
  return (
    <>
      <div className="border-2 w-[100%] h-[100vh]">
        <div className=" flex items-center justify-between  h-[80px] shadow-md">
          <div className=" font-semibold text-[25px] sm:text-[35px] md:text-[40px] lg:text-[40px] relative left-[10px] sm:left-[20px] md:left-[40px] lg:left-[50px]">
            Menu Management
          </div>
          <div className="relative right-[10px] sm:right-[20px] md:right-[40px] lg:right-[50px]">
            <Link
              to="/add_item"
              className="border-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] bg-amber-500 text-white rounded-[10px]"
            >
              Add item
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuManagement;

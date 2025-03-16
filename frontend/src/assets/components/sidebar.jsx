import { useState } from "react";
import SidebarLinks from "./sidebar-links";

function Sidebar() {
  const [isopen, SetIsOpen] = useState(false);
  const handleToggle = () => {
    SetIsOpen(!isopen);
  };
  const handleToggle1 = () => {
    SetIsOpen(!isopen);
  };
  return (
    <>
      <div className="relative">
        <a
          href="#"
          className={`flex flex-col gap-1 w-[22px] absolute top-[0px] z-[100] duration-2500 linear ${
            isopen ? "opacity-2" : "opacity-100"
          }`}
          onClick={handleToggle}
        >
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          <div className="border-2 border-black"></div>
          {/* {isopen ? <Cross place="translate-x-[80px]" /> : <Burger />} */}
        </a>
        <div
          className={`bg-gray-50 z-[999]  h-[40vh] fixed top-[37px] w-[120px] -left-[120px] duration-2000 linear ${
            isopen ? "translate-x-[120px]" : "-translate-x-[120px]"
          } `}
        >
          <div
            className="border-1 h-[14px] w-[15px] relative left-[105px]"
            onClick={handleToggle1}
          >
            <img src="/public/images/cross.png" className="size-full" />
          </div>
          <div className=" flex  flex-col relative top-[20px]">
            <SidebarLinks text="Home" hover="hover:bg-gray-100" />
            <SidebarLinks text="Menu" hover="hover:bg-gray-100" />
            <SidebarLinks text="Subscription" hover="hover:bg-gray-100" />
            <SidebarLinks text="Contact" hover="hover:bg-gray-100" />
            <SidebarLinks text="About" bg="bg-amber-500" color="text-white" />
          </div>
          <div className="pt-[1px] pb-[1px] items-center border-y-1 border-gray-200 flex relative top-[19px] hover:bg-gray-100   transform duration-300 linear">
            <a href="#" className=" h-[20px] w-[20px] relative left-[1.5px]">
              <img src="/images/icon1.png" className="size-full" />
            </a>
            <a href="#" className="text-[10px] ">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;

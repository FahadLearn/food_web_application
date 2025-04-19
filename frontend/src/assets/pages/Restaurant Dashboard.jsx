import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

function FoodDeliveryDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalDelivered: 0,
    totalCanceled: 0,
    totalRevenue: 0,
  });
  useEffect(() => {
    function updateDashboard() {
      setStats({
        totalOrders: 1245,
        totalDelivered: 980,
        totalRevenue: 24500,
        totalCanceled: 150,
      });
    }
    updateDashboard();
    const interval = setInterval(updateDashboard, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex w-[100%] h-[100vh]">
        <div
          className={`bg-gray-900 sm:w-[30%] md:w-[27%] lg:w-[25%] fixed sm:relative h-full z-50 sm:block transition-transform duration-300 ${
            isSidebarOpen
              ? "translate-x-0 w-[40%]"
              : "-translate-x-full sm:translate-x-0"
          }`}
        >
          <div
            className="w-[20px] h-[20px] ml-auto relative right-[5px] top-[5px] block sm:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <img src="/images/whitecorss.png" />
          </div>
          <div className="text-white relative   text-center font-semibold sm:text-[20px] top-[60px] md:text-[25px]  lg:text-[35px]">
            Food Delivery
          </div>
          <div className="flex flex-col top-[100px]  relative">
            <Link
              to="/restaurantprofile"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Profile
            </Link>
            <Link
              to=""
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Dashboard
            </Link>
            <Link
              to="/menu_management"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Menu
            </Link>
            <Link
              to="/ordersManagement"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Orders
            </Link>
            <Link
              to="/customer_managment"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Customers
            </Link>
            <Link
              to="/subscription_managment"
              className="text-center text-white  lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Subscription
            </Link>

            <Link className="text-center text-white  lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400">
              Payment
            </Link>
            <Link className="text-center text-white  lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400">
              Setting
            </Link>
            <Link className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1  border-gray-200 bg-amber-500">
              Logout
            </Link>
          </div>
        </div>
        <div className="w-[100%] sm:w-[70%] md:w-[73%] lg:w-[75%]">
          <div className="flex items-center justify-center sm:justify-start h-[70px] shadow-md">
            <div
              className="flex flex-col gap-[5px] relative right-[90px] block sm:hidden "
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <div className="border-2 w-[23px] "></div>
              <div className="border-2 w-[23px]"></div>
              <div className="border-2 w-[23px]"></div>
            </div>
            <div className="relative sm:left-[15px] lg:left-[30px] font-semibold text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Admin Dashboard
            </div>
          </div>

          <div className=" font-semibold text-[30px] sm:text-[25px] md:text-[30px] lg:text-[30px] relative top-[20px] left-[15px] lg:left-[30px] w-[200px]">
            DashBoard
          </div>
          <div className="relative top-[50px] flex flex-col gap-[10px] sm:flex-row justify-center  w-[100%] sm:gap-[10px]  ">
            <div className=" flex justify-center sm:justify-end gap-[10px]  w-[100%] sm:w-[50%]">
              <div className=" w-[30%] sm:w-[45%]  pt-[25px] pb-[25px] rounded [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)] ">
                <h3 className="sm:text-[14px] md:text-[18px] lg:text-[22px]  text-center font-semibold">
                  Total Orders
                </h3>
                <p className="lg:text-[20px] text-center font-bold text-amber-500">
                  {stats.totalOrders}
                </p>
              </div>
              <div className=" w-[30%] sm:w-[45%]  pt-[25px] pb-[25px] rounded [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
                <h3 className="sm:text-[14px] md:text-[18px] lg:text-[22px] text-center font-semibold">
                  Total Delivered
                </h3>
                <p className="lg:text-[20px] text-center font-bold text-green-700">
                  {stats.totalDelivered}
                </p>
              </div>
            </div>
            <div className=" flex justify-center sm:justify-start gap-[10px]  w-[100%] sm:w-[50%]">
              <div className=" w-[30%]  sm:w-[45%]  pt-[25px] pb-[25px] rounded [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
                <h3 className="sm:text-[14px] md:text-[18px] lg:text-[22px] text-center font-semibold">
                  Total Canceled
                </h3>
                <p className="lg:text-[20px] text-center  font-bold text-red-500">
                  {stats.totalCanceled}
                </p>
              </div>
              <div className=" w-[30%]  sm:w-[45%]  pt-[25px] pb-[25px] rounded [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
                <h3 className="sm:text-[14px] md:text-[18px]   lg:text-[22px] text-center font-semibold">
                  Total Revenue
                </h3>
                <p className="lg:text-[20px] text-center  font-bold text-blue-800">
                  ${stats.totalRevenue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDeliveryDashboard;

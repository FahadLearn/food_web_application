import { Link } from "react-router-dom";
import cameraIcon from "/public/images/camera.jpg";
import { useState, useEffect } from "react";
function RiderDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
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
              to="/riderprofile"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              My Profile
            </Link>
            <Link
              to=""
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Available Sessions
            </Link>
            <Link
              to="/menu_management"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              My Sessions
            </Link>
            <Link
              to="/ordersManagement"
              className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400"
            >
              Inbox
            </Link>
            <Link className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400">
              Order History
            </Link>
            <Link className="text-center text-white  lg:text-[20px] pt-[8px] pb-[8px] border-t-1 border-gray-200 hover:bg-neutral-400 duration-400">
              Wallet
            </Link>
            <Link className="text-center text-white lg:text-[20px] pt-[8px] pb-[8px] border-t-1  border-gray-200 bg-amber-500">
              Payment
            </Link>
          </div>
        </div>
        <div className="w-[100%] sm:w-[70%] md:w-[73%] lg:w-[75%]">
          <div className="flex items-center justify-between h-[70px] shadow-md">
            <div
              className="flex flex-col gap-[5px] relative left-[15px] block sm:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <div className="border-2 w-[23px] "></div>
              <div className="border-2 w-[23px]"></div>
              <div className="border-2 w-[23px]"></div>
            </div>
            <div className="relative sm:left-[15px] lg:left-[30px] font-semibold text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Rider Dashboard
            </div>
            <div className="relative right-[15px] lg:right-[30px] flex items-center justify-center">
              <Link>
                <div
                  className=" text-[16px] sm:text-[25px]"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  Click!
                </div>
              </Link>
            </div>
          </div>

          <div
            className={`bg-gray-900 absolute right-[0px] top-[70px] text-white z-[1000] transition-all duration-300 sm:w-[30%] md:w-[25%] lg:w-[23%]  ml-auto ${
              isVisible
                ? "h-130  opacity-100"
                : "h-0  opacity-0 overflow-hidden"
            }`}
          >
            <div className=" w-[95%] mx-auto relative top-[40px]">
              <h2 className="text-center  sm:text-[20px] md:text-[20px] lg:text-[25px] font-bold  ">
                Upload an Image
              </h2>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-[85%] mx-auto relative top-[10px] text-sm text-gray-300 bg-gray-800 border border-gray-600 rounded-lg cursor-pointer focus:outline-none p-2"
              />
              <div className="relative top-[20px] flex  flex-col  items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="first_name"
                  className="text-gray-500  outline-none border-gray-500 border-b-1 bg-gray-900  text-[16px] pt-[15px] pb-[15px] w-[85%] pr-[20px] pl-[20px] "
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="flex flex-col relative top-[150px] text-center pt-[8px] pb-[8px]">
                <Link
                  className="pt-[8px] pb-[8px] text-[20px] border-t-1  border-gray-200
                    "
                >
                  Setting
                </Link>

                <Link
                  className="pt-[8px] pb-[8px] text-[20px] bg-amber-500 border-t-1  border-gray-200
                    "
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RiderDashboard;

import Btn from "../components/input button";
import { useState } from "react";
import cameraIcon from "/public/images/camera.jpg";

function UserProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, SetformData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone_Number: "",
  });
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div className="h-[100vh] w-[100%] ">
        <div className="h-[100%] w-[100%] ">
          <div className="border-2 border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
            User Profile
          </div>
          <div className="flex flex-col justify-center  lg:h-[100%] lg:w-[50%] md:h-[100%] md:w-[50%] sm:h-[100%] sm:w-[60%]  h-[100%] w-[90%] mx-auto  gap-[20px]  ">
            <div className="  w-[100%]  flex justify-center ">
              <div className=" h-[150px] w-[170px] rounded-full">
                <img
                  src={selectedImage || cameraIcon}
                  className="size-full rounded-full"
                />
              </div>
            </div>
            <form>
              <div className=" gap-[10px] w-[100%] sm:gap-[10px]  md:gap-[10px]   flex flex-col items-center lg:gap-[10px] ">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Upload Img"
                  required
                />
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Name"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="Email"
                  value={formData.Email}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px] ] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Email"
                  onChange={handleState}
                  required
                />
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Password"
                  onChange={handleState}
                  autoComplete="off"
                  required
                />{" "}
                <input
                  type="text"
                  name="Phone_Number"
                  value={formData.Phone_Number}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Phone Number"
                  onChange={handleState}
                  required
                />
              </div>
            </form>
            <div className="w-[100%] top-[20px] flex flex-col items-center  relative   ">
              <Btn text="Update" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfile;

// import Btn from "../components/input button";
import { useEffect, useState } from "react";
import cameraIcon from "/public/images/camera.jpg";
import { LogOut } from "../components/Logout";

function UserProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Phone_Number: "",
    IMG_URL: null,
  });
  useEffect(() => {
    fetch("http://localhost:3000/api/Profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // ✅ Ensure cookies are sent
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // ✅ Debug fetched data
        if (data) {
          setFormData({
            Name: data.Name || "",
            Email: data.Email || "",
            Password: data.Password || "",
            Phone_Number: data.Phone_Number || "",
            IMG_URL: data.IMG_URL || null,
          });
        }
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // 👈 Image Preview
      setFormData({ ...formData, IMG_URL: file }); // 👈 Image Store in FormData
    }
  };
  // console.log(formData);
  const handleState = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Password", formData.Password);
    data.append("Phone_Number", formData.Phone_Number);

    if (formData.IMG_URL instanceof File) {
      data.append("IMG_URL", formData.IMG_URL); // ✅ Upload image
    }

    try {
      const response = await fetch("http://localhost:3000/api/update", {
        method: "PATCH",
        body: data,
        credentials: "include", // ✅ Ensures cookies (for authentication) are sent
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      const updatedUser = await response.json(); // ✅ Get updated user data
      alert("Profile updated successfully!"); // ✅ Show success message

      // ✅ Update local state instead of reloading
      setFormData((prev) => ({
        ...prev,
        ...updatedUser, // ✅ Merge updated data
      }));
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      alert(`Error: ${error.message}`);
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
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="  w-[100%]  flex justify-center ">
                <div className=" h-[150px] w-[170px] rounded-full">
                  <img
                    src={selectedImage || cameraIcon}
                    className="size-full rounded-full"
                  />
                </div>
              </div>
              <div className=" gap-[10px] w-[100%] sm:gap-[10px]  md:gap-[10px]   flex flex-col items-center lg:gap-[10px] ">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px]  w-[300px]  pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Upload Img"
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
              <div className="w-[100%] top-[20px] flex flex-col items-center  relative   ">
                <input type="submit" value="Update" />
              </div>
            </form>
            {/* <div className="w-[100%] top-[20px] flex flex-col items-center  relative   ">
              <Btn text="Update" onclick={handleSubmit} />
            </div> */}
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfile;

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
    Address: "",
    IMG_URL: null,
  });
  const [message, setMessage] = useState("");

  // ✅ Fetch User Data + Image
  useEffect(() => {
    fetch("http://localhost:3000/api/Profile", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFormData({
            Customer_ID: data.Customer_ID || "",
            Name: data.Name || "",
            Email: data.Email || "",
            Password: data.Password || "",
            Address: data.Address || "",
            Phone_Number: data.Phone_Number || "",
            IMG_URL: data.IMG_URL
              ? `http://localhost:3000${data.IMG_URL}`
              : null,
          });
        }
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, [formData.IMG_URL]); // ✅ Re-fetch jab image update ho

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // ✅ Preview image
      setFormData({ ...formData, IMG_URL: file });
    }
  };

  const handleState = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imgPath = formData.IMG_URL; // Default old image path

      // ✅ If new image selected, upload first
      if (formData.IMG_URL instanceof File) {
        const imgData = new FormData();
        imgData.append("IMG_URL", formData.IMG_URL);

        const imgResponse = await fetch("http://localhost:3000/api/Image", {
          method: "PATCH",
          body: imgData,
          credentials: "include",
        });

        if (!imgResponse.ok) {
          const errorData = await imgResponse.json();
          throw new Error(errorData.message || "Failed to upload image");
        }

        const imgResult = await imgResponse.json();
        imgPath = `http://localhost:3000${imgResult.IMG_URL}`; // ✅ Use full path
      }

      // ✅ Now update user data
      const userData = {
        Customer_ID: formData.Customer_ID,
        Name: formData.Name,
        Email: formData.Email,
        Password: formData.Password,
        Address: formData.Address,
        Phone_Number: formData.Phone_Number,
        IMG_URL: imgPath,
      };

      const userResponse = await fetch("http://localhost:3000/api/Update", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(errorData.message || "Failed to update user");
      }

      setMessage("Profile updated successfully!");
      setFormData((prev) => ({ ...prev, IMG_URL: imgPath })); // ✅ Update preview
    } catch (error) {
      console.error("Error updating profile:", error);
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
          <div className="flex flex-col justify-center lg:h-[100%] lg:w-[50%] md:h-[100%] md:w-[50%] sm:h-[100%] sm:w-[60%] h-[100%] w-[90%] mx-auto gap-[20px]">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="w-[100%] flex justify-center">
                <div className="h-[150px] w-[170px] rounded-full">
                  {/* ✅ Image Display Logic */}
                  {/* <img
                    src={
                      selectedImage
                        ? selectedImage
                        : formData.IMG_URL
                        ? formData.IMG_URL // ✅ Full path directly use karein
                        : cameraIcon
                    }
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = cameraIcon;
                    }}
                    className="size-full rounded-full object-cover"
                    alt="User Profile"
                  /> */}
                </div>
              </div>
              <div className="gap-[10px] w-[100%] sm:gap-[10px] md:gap-[10px] flex flex-col items-center lg:gap-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  placeholder="Upload Img"
                />
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  placeholder="Name"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="Email"
                  value={formData.Email}
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  placeholder="Email"
                  onChange={handleState}
                  required
                />
                <input
                  type="password"
                  name="Password"
                  value={formData.Password}
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  placeholder="Password"
                  onChange={handleState}
                  autoComplete="off"
                  required
                />
                <input
                  type="text"
                  name="Address"
                  value={formData.Address}
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  placeholder="Address"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="Phone_Number"
                  value={formData.Phone_Number}
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  placeholder="Phone Number"
                  onChange={handleState}
                  required
                />
              </div>

              {message ? <p>{message}</p> : null}
              <div className="w-[100%] top-[20px] flex flex-col items-center relative">
                <input type="submit" value="Update" />
              </div>
            </form>
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function RiderProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setmessage] = useState(null);
  const [formData, SetformData] = useState({
    First_Name: "",
    Last_Name: "",
    City: "",
    Vehicle: "",
    Cnic: "",
    Phone_No: "",
    Date_of_Birth: "",
    License: "",
    Payment_Method: "",
    Account_Title: "",
    Email: "",
    Password: "",
    Img: null,
  });
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("http://localhost:3000/Rider/Profile", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      SetformData({
        First_Name: data.First_Name,
        Last_Name: data.Last_Name,
        City: data.City,
        Vehicle: data.Vehicle,
        Cnic: data.Cnic,
        Phone_No: data.Phone_No,
        Date_of_Birth: data.Date_of_Birth,
        License: data.License,
        Payment_Method: data.Payment_Method,
        Account_Title: data.Account_Title,
        Email: data.Email,
        Password: data.Password,
        Img: data.Img ? `http://localhost:3000${data.Img}` : null,
      });
    };

    fetchProfile();
  }, []);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("📸 Selected File:", file);
      setSelectedFile(URL.createObjectURL(file));
      SetformData((prev) => ({
        ...prev,
        Img: file, // ✅ Ensure File Object is Stored
      }));
    }
  };
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = new FormData();
    newData.append("First_Name", formData.First_Name);
    newData.append("Last_Name", formData.Last_Name);
    newData.append("City", formData.City);
    newData.append("Vehicle", formData.Vehicle);
    newData.append("Cnic", formData.Cnic);
    newData.append("Phone_No", formData.Phone_No);
    newData.append("Date_of_Birth", formData.Date_of_Birth);
    newData.append("License", formData.License);
    newData.append("Payment_Method", formData.Payment_Method);
    newData.append("Account_Title", formData.Account_Title);
    newData.append("Email", formData.Email);
    newData.append("Password", formData.Password);
    if (formData.Img instanceof File) {
      console.log("📸 Uploading Image:", formData.Img.name);
      newData.append("Img", formData.Img);
    } else {
      console.warn("No new image selected!");
    }

    const response = await fetch("http://localhost:3000/Rider/updateProfile", {
      method: "PATCH",
      credentials: "include",
      body: newData,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    setmessage(data.message);
  };
  return (
    <>
      <div className=" ">
        <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          My Profile
        </div>
        <div className="relative top-[50px] flex flex-col gap-[5px]">
          <div className=" h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]   md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] rounded-full mx-auto">
            {/* <img
              src="/images/profile pic.webp"
              className="size-full object-fit rounded-full"
            /> */}
            <img
              src={
                selectedFile
                  ? selectedFile
                  : formData.Img
                  ? formData.Img
                  : "/images/profile pic.webp"
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/profile pic.webp";
              }}
              className="size-full rounded-[30px] object-cover"
              alt="User Profile"
            />
          </div>
          <div className=" font-semibold text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
            {formData.First_Name + " " + formData.Last_Name}
          </div>
          {/* <div className="text-center">Your ID</div> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-[80px]  flex-col gap-[10px]  flex justify-center items-center">
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="First_Name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.First_Name}
                onChange={handleState}
                required
              />
              <input
                type="text"
                name="Last_Name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.Last_Name}
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="email"
                name="Email"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.Email}
                onChange={handleState}
                required
              />
              <input
                type="password"
                name="Password"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.Password}
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="City"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.City}
                onChange={handleState}
                required
              />
              <select
                name="Vehicle"
                value={formData.Vehicle}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="">Select a vehicle</option>
                <option value="bike">Bike</option>
                <option value="scooter">Scooter</option>
              </select>
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="text"
                name="License"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.License}
                onChange={handleState}
                required
              />

              <input
                type="text"
                name="Date_of_Birth"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.Date_of_Birth}
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <select
                name="Payment_Method"
                value={formData.Payment_Method}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                onChange={handleState}
              >
                <option value="">Select payment method</option>
                <option value="easypaisa">Easy Paisa</option>
                <option value="Jazzcash">Jazz Cash</option>
              </select>

              <input
                type="text"
                name="Cnic"
                value={formData.Cnic}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="CNIC"
                onChange={handleState}
                required
              />
            </div>
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
              <input
                type="tel"
                name="Phone_No"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                value={formData.Phone_No}
                onChange={handleState}
                required
              />

              <input
                type="text"
                name="Account_Title"
                value={formData.Account_Title}
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="account_title"
                onChange={handleState}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-[10px]">
              <input
                type="file"
                accept="image/*"
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                onChange={handleImageUpload}
              />
            </div>
            {message && <p className="text-red-500">{message}</p>}
            <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]  pt-[40px] pb-[40px]">
              {/* <input
                type="Submit"
                value="Delete Account"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              /> */}

              <input
                type="Submit"
                value="Save information"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default RiderProfile;

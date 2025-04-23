import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RestaurantProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setmessage] = useState(null);
  const [formData, SetformData] = useState({
    First_Name: "",
    Last_Name: "",
    Business_Name: "",
    Email: "",
    Password: "",
    Business_Type: "",
    Phone_Number: "",
    City: "",
    Province: "",
    Area: "",
    Postal_Code: "",
    Detail_Address: "",
    CNIC: "",
    License: "",
    FBR: "",
    Account_Title: "",
    Bank_Name: "",
    IBAN: "",
    Img: null,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:3000/restaurant/Profile", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        console.log(data);
        SetformData({
          First_Name: data.First_Name,
          Last_Name: data.Last_Name,
          Business_Name: data.Business_Name,
          Email: data.Email,
          Password: data.Password,
          Business_Type: data.Business_Type,
          Phone_Number: data.Phone_Number,
          City: data.City,
          Province: data.Province,
          Area: data.Area,
          Postal_Code: data.Postal_Code,
          Detail_Address: data.Detail_Address,
          CNIC: data.CNIC,
          License: data.License,
          FBR: data.FBR,
          Account_Title: data.Account_Title,
          Bank_Name: data.Bank_Name,
          IBAN: data.IBAN,
          Img: data.Img ? `http://localhost:3000${data.Img}` : null,
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newdata = new FormData();
      newdata.append("First_Name", formData.First_Name);
      newdata.append("Last_Name", formData.Last_Name);
      newdata.append("Business_Name", formData.Business_Name);
      newdata.append("Email", formData.Email);
      newdata.append("Password", formData.Password);
      newdata.append("Business_Type", formData.Business_Type);
      newdata.append("Phone_Number", formData.Phone_Number);
      newdata.append("City", formData.City);
      newdata.append("Province", formData.Province);
      newdata.append("Detail_Address", formData.Detail_Address);
      newdata.append("CNIC", formData.CNIC);
      newdata.append("License", formData.License);
      newdata.append("FBR", formData.FBR);
      newdata.append("Account_Title", formData.Account_Title);
      newdata.append("Bank_Name", formData.Bank_Name);
      newdata.append("IBAN", formData.IBAN);

      if (formData.Img instanceof File) {
        console.log("📸 Uploading Image:", formData.Img.name);
        newdata.append("Img", formData.Img);
      } else {
        console.warn("No new image selected!");
      }

      const res = await fetch("http://localhost:3000/restaurant/update", {
        method: "PATCH",
        body: newdata,
        credentials: "include",
      });

      if (!res.ok) {
        return res.status(400).json({ message: "Not Updating" });
      }
      const data = await res.json();
      console.log(data);
      setmessage(data.message);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className=" border-amber-500 text-center font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
        My Profile
      </div>
      <div className="relative top-[50px] flex flex-col gap-[5px]">
        <div className=" h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]   md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] rounded-full mx-auto">
          {/* <img
            src={formData.Img ? formData.Img : "/images/profile pic.webp"}
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
          {formData.Business_Name}
        </div>
        {/* <div className="text-center">{formData.Restaurant_ID}</div> */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" mt-[80px]  flex flex-col gap-[10px]">
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="First_Name"
              value={formData.First_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="First Name"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Last_Name"
              value={formData.Last_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Last Name"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="tell"
              name="Phone_Number"
              value={formData.Phone_Number}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Phone Number"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="CNIC"
              value={formData.CNIC}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="CNIC"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="Business_Name"
              value={formData.Business_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter your Business Name"
              onChange={handleState}
              required
            />
            <select
              name="Business_Type"
              value={formData.Business_Type}
              onChange={handleState}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
            >
              <option value="" disabled selected>
                Business Type
              </option>
              <option value="Shop">Shop</option>
              <option value="Restaurant">Restaurant</option>
              <option value=" HomeBased">HomeBased</option>
            </select>
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="Email"
              value={formData.Email}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Business Email"
              onChange={handleState}
              required
            />
            <input
              type="password"
              name="Password"
              value={formData.Password}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Password"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="City"
              value={formData.City}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Your City"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Province"
              value={formData.Province}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Your province"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="Area"
              value={formData.Area}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Your Area"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Postal_Code"
              value={formData.Postal_Code}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Postal Code"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center">
            <input
              type="text"
              name="Detail_Address"
              value={formData.Detail_Address}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Enter Your Business Name and Address"
              onChange={handleState}
              required
            />
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <select
              name="License"
              onChange={handleState}
              value={formData.License}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
            >
              <option value="" disabled selected>
                Do you have a operating license?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <select
              name="FBR"
              value={formData.FBR}
              onChange={handleState}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] sm:w-[605px] md:w-[605px] lg:w-[610px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
            >
              <option value="" disabled selected>
                Is your business register with pakistani federal bureau of
                revenue?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="Account_Title"
              value={formData.Account_Title}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Bank Account Owner/Title"
              onChange={handleState}
              required
            />
            <input
              type="text"
              name="Bank_Name"
              value={formData.Bank_Name}
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="Bank Name"
              onChange={handleState}
              required
            />
          </div>
          <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px]">
            <input
              type="text"
              name="IBAN"
              value={formData.IBAN}
              className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              placeholder="IBAN Number"
              onChange={handleState}
              required
            />
            <div className="flex flex-col sm:flex-row items-center justify-start gap-[10px]">
              <input
                type="file"
                accept="image/*"
                className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          {message && <p className="text-red-500 mx-[auto]">{message}</p>}

          <div className=" flex  flex-col sm:flex-row items-center justify-center gap-[10px]  pt-[40px] pb-[40px]">
            {/* <Link to="">
              <input
                type="Submit"
                value="Delete Account"
                className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
              />
            </Link> */}
            <input
              type="Submit"
              value="Save information"
              className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default RestaurantProfile;

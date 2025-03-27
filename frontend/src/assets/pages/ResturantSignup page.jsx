import { useState } from "react";
import RestaurantSignup1 from "../components/Admin signup page-1";
// import RestaurantSignup2 from "../components/Admin signup page-2";
import RestaurantSignup3 from "../components/Admin signup page-3";
import RestaurantSignup4 from "../components/Admin signup page-4";
import RestaurantSignup5 from "../components/Admin signup page-5";

function RestaurantSignup() {
  const [formData, SetformData] = useState({
    Restaurant_ID: "",
    First_Name: "",
    Last_Name: "",
    Business_Name: "",
    Business_Email: "",
    Password: "",
    Business_Type: "",
    Phone_Number: "",
    City: "",
    Province: "",
    Area: "",
    Postal_Code: "",
    Detail_Address: "",
    CNIC: "",
    Operating_License: "",
    FBR: "",
    Account_Title: "",
    Bank_Name: "",
    IBAN: "",
    Owner_ID: "",
    Front_img: "",
    Back_img: "",
    Profile_pic: "",
  });
  const handleChange = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <RestaurantSignup1
        formData={{
          First_Name: formData.First_Name,
          Last_Name: formData.Last_Name,
          Business_Name: formData.Business_Name,
          Business_Email: formData.Business_Email,
          Password: formData.Password,
          Business_Type: formData.Business_Type,
          Phone_Number: formData.Phone_Number,
        }}
        onChange={handleChange}
      />
      {/* <RestaurantSignup2 /> */}
      <RestaurantSignup3
        formData={{
          City: formData.City,
          Province: formData.Province,
          Area: formData.Area,
          Postal_Code: formData.Postal_Code,

          Detail_Address: formData.Detail_Address,
        }}
        onChange={handleChange}
      />
      <RestaurantSignup4
        formData={{
          CNIC: formData.CNIC,
          Operating_License: formData.Operating_License,
          FBR: formData.FBR,
        }}
        onChange={handleChange}
      />
      <RestaurantSignup5
        formData={{
          Account_Title: formData.Account_Title,
          Bank_Name: formData.Bank_Name,
          IBAN: formData.IBAN,
          Owner_ID: formData.Owner_ID,
        }}
        onChange={handleChange}
      />
    </>
  );
}
export default RestaurantSignup;

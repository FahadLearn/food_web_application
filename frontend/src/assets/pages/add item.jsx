import { useState } from "react";
function AddItem() {
  const [formData, SetformData] = useState({
    Item_ID: "",
    Name: "",
    Category: "",
    Price: "",
    Discount: "",
    Description: "",
    Availability: "",
  });
  const [error, setError] = useState(null);
  const [Img, SetImg] = useState(null);
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Item_ID", formData.Item_ID);
    data.append("Name", formData.Name);
    data.append("Category", formData.Category);
    data.append("Price", formData.Price);
    data.append("Discount", formData.Discount);
    data.append("Description", formData.Description);
    data.append("Availability", formData.Availability);
    data.append("Img", Img);

    try {
      const response = await fetch("http://localhost:3000/menu/Add", {
        method: "POST",
        body: data,
        credentials: "include", // 👈 for cookies
      });

      const result = await response.json();
      if (response.ok) {
        setError("Item added successfully");
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className=" w-[100%]  h-[100vh]">
        <div className=" flex items-center justify-center h-[80px] shadow-md">
          <div className="text-amber-600 font-semibold text-[25px] sm:text-[35px] md:text-[40px] lg:text-[40px] ">
            Add Item
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" h-[125vh] sm:h-[90vh] flex justify-center items-center border-2">
            <div className="flex flex-col gap-[15px]  ">
              <div className=" flex flex-col sm:flex-row items-center justify-center gap-[10px] ">
                <input
                  type="text"
                  name="Item_ID"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Enter Id"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="Name"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Item Name"
                  onChange={handleState}
                  required
                />
              </div>
              <div className=" flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="Price"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Price"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="Discount"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Discount price"
                  onChange={handleState}
                />
              </div>

              <div className=" flex justify-center gap-[10px]">
                <textarea
                  rows="4"
                  name="Description"
                  placeholder="Description"
                  onChange={handleState}
                  required
                  className=" outline-none
         w-[300px] sm:w-[600px] md:w-[600px] lg:w-[600px]
       pt-[15px] pb-[15px] pr-[20px] pl-[20px]  bg-[#ECECEC] rounded-[10px] overflow-hidden"
                ></textarea>
              </div>
              <div className="  flex flex-col sm:flex-row items-center justify-center gap-[10px] ">
                <select
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none "
                  placeholder="Available "
                  onChange={handleState}
                  name="Availability"
                >
                  <option value="" disabled selected>
                    Available
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <select
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none "
                  placeholder="Catagory"
                  onChange={handleState}
                  name="Category"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  <option value="fast-food">Fast Food</option>
                  <option value="italian">Italian</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="desserts">Desserts</option>
                </select>
              </div>
              <div className=" flex flex-col sm:flex-row items-center justify-start gap-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => SetImg(e.target.files[0])}
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  required
                />
              </div>
              {error && <div className="text-red-500 mx-[auto]">{error}</div>}
              <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px] relative top-[20px]">
                <input
                  type="Submit"
                  value="Add"
                  className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddItem;

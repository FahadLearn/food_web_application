import { useState } from "react";
import { Link } from "react-router-dom";
function UpdateItem() {
  const [formData, SetformData] = useState({
    id: "",
    name: "",

    price: "",
    discount: "",
    description: "",
    availability: "",
    catagory: "",
  });
  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className=" w-[100%]  h-[100vh]">
        <div className=" flex items-center justify-center h-[80px] shadow-md">
          <div className="text-amber-600 font-semibold text-[25px] sm:text-[35px] md:text-[40px] lg:text-[40px] ">
            Update Item
          </div>
        </div>
        <div className="relative top-[30px]  h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]   md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] rounded-full mx-auto">
          <img
            src="/images/profile pic.webp"
            className="size-full object-fit rounded-full"
          />
        </div>
        <form>
          <div className=" h-[125vh] sm:h-[90vh] flex justify-center items-center ">
            <div className="flex flex-col gap-[15px]  ">
              <div className=" flex flex-col sm:flex-row items-center justify-center gap-[10px] ">
                <input
                  type="text"
                  name="id"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Enter Id"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="name"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Item Name"
                  onChange={handleState}
                  required
                />
              </div>
              <div className=" flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="price"
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Price"
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="discount="
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  placeholder="Discount price"
                  onChange={handleState}
                  required
                />
              </div>

              <div className=" flex justify-center gap-[10px]">
                <textarea
                  rows="4"
                  name="description"
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
                  name="availability"
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
                  name="category"
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
                  className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none "
                />
              </div>
              <div className="flex  flex-col sm:flex-row items-center justify-center gap-[10px] relative top-[20px]">
                <Link>
                  <input
                    type="Submit"
                    value="Update"
                    className="text-white  outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                  />
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default UpdateItem;

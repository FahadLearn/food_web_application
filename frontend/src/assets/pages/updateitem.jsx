import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateItem() {
  const { Item_ID } = useParams(); // Extract Item_ID from the URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [msg, setmsg] = useState(null);
  const [formData, SetformData] = useState({
    Item_ID: "",
    Name: "",
    Category: "",
    Price: "",
    Discount: "",
    Description: "",
    Availability: "",
    Img: "",
  });

  useEffect(() => {
    if (!Item_ID) return; // Ensure Item_ID is available before proceeding

    const fetchItem = async () => {
      try {
        console.log("Fetching item with ID:", Item_ID); // Log the itemId to ensure it is correct
        const res = await fetch(
          `http://localhost:3000/menu/getItem/${Item_ID}`
        );
        const data = await res.json();
        if (res.ok) {
          SetformData({
            Item_ID, // Ensure Item_ID is set here
            Name: data.Name,
            Category: data.Category,
            Price: data.Price,
            Discount: data.Discount,
            Description: data.Description,
            Availability: data.Availability,
            Img: `http://localhost:3000${data.Img}`,
          });

          console.log("Fetched data:", data); // Log fetched data to ensure correct response
        } else {
          alert(data.message || "Failed to fetch item.");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [Item_ID]); // Re-run the effect when Item_ID changes

  const handleState = (event) => {
    SetformData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("Item_ID", formData.Item_ID); // Make sure to append Item_ID
    form.append("Name", formData.Name);
    form.append("Category", formData.Category);
    form.append("Price", formData.Price);
    form.append("Discount", formData.Discount);
    form.append("Description", formData.Description);
    form.append("Availability", formData.Availability);

    if (selectedFile) {
      form.append("Img", selectedFile); // Append selected file if available
    }

    console.log("Form data being sent:", formData); // Log formData to check the values

    try {
      const res = await fetch(`http://localhost:3000/menu/Update/${Item_ID}`, {
        method: "PATCH",
        body: form,
        credentials: "include",
      });

      const result = await res.json();
      console.log(result); // Log result of the update request

      if (res.ok) {
        setmsg(result.message);
      }
    } catch (err) {
      console.error("Update failed:", err);
      setmsg("Update failed.");
    }
  };

  return (
    <>
      <div className="w-[100%] h-[100vh]">
        <div className="flex items-center justify-center h-[80px] shadow-md">
          <div className="text-amber-600 font-semibold text-[25px] sm:text-[35px] md:text-[40px] lg:text-[40px]">
            Update Item
          </div>
        </div>
        <div className="relative top-[30px] h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[170px] md:w-[170px] lg:h-[190px] lg:w-[190px] rounded-full mx-auto">
          <img
            src={formData.Img}
            className="size-full object-fit rounded-full"
            alt="Item Image"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="h-[125vh] sm:h-[90vh] flex justify-center items-center">
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="Item_ID"
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  value={formData.Item_ID}
                  disabled
                />
                <input
                  type="text"
                  name="Name"
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  value={formData.Name}
                  onChange={handleState}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                <input
                  type="text"
                  name="Price"
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  value={formData.Price}
                  onChange={handleState}
                  required
                />
                <input
                  type="text"
                  name="Discount"
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  value={formData.Discount}
                  onChange={handleState}
                  required
                />
              </div>

              <div className="flex justify-center gap-[10px]">
                <textarea
                  rows="4"
                  name="Description"
                  value={formData.Description}
                  onChange={handleState}
                  required
                  className="outline-none w-[300px] sm:w-[600px] md:w-[600px] lg:w-[600px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] bg-[#ECECEC] rounded-[10px] overflow-hidden"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                <select
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] appearance-none"
                  name="Availability"
                  value={formData.Availability}
                  onChange={handleState}
                >
                  <option value="">Availability</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <input
                  type="text"
                  name="Category"
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  value={formData.Category}
                  onChange={handleState}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-[10px]">
                <input
                  type="file"
                  accept="image/*"
                  className="text-gray-500 outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </div>
              {msg && <p className="text-red-500 mx-[auto]">{msg}</p>}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] relative top-[20px]">
                <input
                  type="Submit"
                  value="Update"
                  className="text-white outline-none rounded-[30px] bg-amber-500 text-[16px] w-[300px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateItem;

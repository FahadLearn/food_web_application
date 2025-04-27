import cuisine from "../../cuisine.json";
import CuisineMap from "../components/cuisine map";
import Header from "../components/Header";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Cuisine() {
  const [CAT_NAME] = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/menu/cuisine/${cat_name}`
        );
        const data = await res.json();
        setItems(data);
        console.log("Fetched Items:", data);
      } catch (error) {
        console.error("Error fetching cuisine items:", error);
      }
    };

    fetchItems();
  }, [cat_name]);
  return (
    <>
      <Header />
      <div className="">
        <div className="mt-[10px] flex justify-center pt-[10px] pb-[10px]">
          <input
            type="text"
            placeholder="Search Brand"
            className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[380px] sm:w-[520px] md:w-[600px] lg:w-[640px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
          />
        </div>
        <div className=" font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px]  text-center">
          Fast Food
        </div>
        <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
          {cuisine.map((item) => (
            <CuisineMap key={item.Item_ID} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cuisine;

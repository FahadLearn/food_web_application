import { useParams } from "react-router-dom";
// import burgers from "../../burgers.json";
import Food_items from "../components/fooditems";
import Footer from "../components/footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
function BrandPage() {
  const [category, setCategory] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurant, Setrestaurant] = useState([]);
  const { Restaurant_ID } = useParams();

  useEffect(() => {
    const fetchCat = async () => {
      const res = await fetch(
        `http://localhost:3000/menu/Dis_cat/${Restaurant_ID}`,
        {
          method: "get",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      setCategory(data.categories);
    };
    fetchCat();
  }, [Restaurant_ID]);
  console.log(category);
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        `http://localhost:3000/menu/getAllItems/${Restaurant_ID}`
      );
      const data = await res.json();
      setAllItems(data.menu);
      console.log("MEnu", data.menu);
    };
    fetchItems();
  }, [Restaurant_ID]);
  useEffect(() => {
    const fetchres = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/restaurant/rest/${Restaurant_ID}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = await res.json();
        Setrestaurant(data);
        console.log("rest", data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchres();
  }, [Restaurant_ID]);
  return (
    <>
      <Header />
      <div className="">
        <div className=" w-[100%] h-[30vh] bg-amber-500 flex flex-col items-center justify-center">
          <div className="h-[100px] w-[100px]">
            <img
              src={restaurant ? `http://localhost:3000${restaurant.Img}` : null}
              className="size-full object-cover"
            />
          </div>
          <div className=" text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-semibold text-white text-center">
            {restaurant.Business_Name +
              " " +
              restaurant.Area +
              " " +
              restaurant.City}
          </div>
        </div>
        <div className="w-full scrollbar-hide overflow-x-auto">
          <div className=" flex  justify-center items-center gap-[30px] pt-[20px] pb-[15px] whitespace-nowrap px-4 min-w-max">
            {/* <Link>
              <div className="border-b-3 border-amber-600 text-[18px] font-semibold text-gray-800 ">
                Pizza
              </div>
            </Link>
            <Link>
              <div className="border-b-3 border-white text-[18px] font-semibold text-gray-800 hover:border-b-3 hover:border-amber-600">
                Burger
              </div>
            </Link>
            <Link>
              <div className="border-b-3 border-white text-[18px] font-semibold text-gray-800 hover:border-b-3 hover:border-amber-600">
                Pasta
              </div>
            </Link>
            <Link>
              <div className="border-b-3 border-white text-[18px] font-semibold text-gray-800 hover:border-b-3 hover:border-amber-600">
                Coldrinks
              </div>
            </Link>
            <Link>
              <div className="border-b-3 border-white text-[18px] font-semibold text-gray-800 hover:border-b-3 hover:border-amber-600">
                Dessert
              </div>
            </Link>
            <Link>
              <div className="border-b-3 border-white text-[18px] font-semibold text-gray-800 hover:border-b-3 hover:border-amber-600">
                Sandwiches
              </div>
            </Link> */}

            {/* CATEGORY NAVBAR */}
            <div className="w-full scrollbar-hide overflow-x-auto">
              <div className="flex justify-center items-center gap-[30px] pt-[20px] pb-[15px] whitespace-nowrap px-4 min-w-max">
                <div
                  onClick={() => setSelectedCategory(null)}
                  className={`cursor-pointer border-b-3 ${
                    selectedCategory === null
                      ? "border-amber-600"
                      : "border-white"
                  } text-[18px] font-semibold text-gray-800 hover:border-amber-600`}
                >
                  All
                </div>
                {category.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedCategory(cat.Category)}
                    className={`cursor-pointer border-b-3 ${
                      selectedCategory === cat.Category
                        ? "border-amber-600"
                        : "border-white"
                    } text-[18px] font-semibold text-gray-800 hover:border-amber-600`}
                  >
                    {cat.Category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20px] ">
          <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]"></div>
        </div>
        {/* <div className="mt-[20px] ">
          <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
            {burgers.map((item) => (
              <Food_items key={item.Item_ID} data={item} />
            ))}
          </div>
        </div>
        <div className="mt-[20px] ">
          <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
            {burgers.map((item) => (
              <Food_items key={item.Item_ID} data={item} />
            ))}
          </div>
        </div> */}
        <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px] px-4">
          {allItems
            .filter((item) =>
              selectedCategory ? item.Category === selectedCategory : true
            )
            .map((item) => (
              <Food_items key={item.Item_ID} data={item} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default BrandPage;

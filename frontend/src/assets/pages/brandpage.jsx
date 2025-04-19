import { Link } from "react-router-dom";
import burgers from "../../burgers.json";
import Food_items from "../components/fooditems";
import Footer from "../components/footer";
import Header from "../components/Header";
function BrandPage() {
  return (
    <>
      <Header />
      <div className="">
        <div className=" w-[100%] h-[30vh] bg-amber-500 flex flex-col items-center justify-center">
          <div className="h-[100px] w-[100px]">
            <img
              src="/images/McDonalds-Logo.png"
              className="size-full object-cover"
            />
          </div>
          <div className=" text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-semibold text-white text-center">
            Macdonald-Cantt
          </div>
        </div>
        <div className="w-full scrollbar-hide overflow-x-auto">
          <div className=" flex  justify-center items-center gap-[30px] pt-[20px] pb-[15px] whitespace-nowrap px-4 min-w-max">
            <Link>
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
            </Link>
          </div>
        </div>
        <div className="mt-[20px] ">
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
        </div>
        <div className="mt-[20px] ">
          <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
            {burgers.map((item) => (
              <Food_items key={item.Item_ID} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default BrandPage;

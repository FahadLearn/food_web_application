import Header from "../components/Header";
import food from "../../food_items.json";
import Food_items from "../components/fooditems";
import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

// there u go
function MenuPage() {
  const scrollRef = useRef(null);

  // Function to scroll manually
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -250 : 350;
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 350;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header />
      <div className="border-2">
        <div className="mt-[10px] flex justify-center pt-[10px] pb-[10px]">
          <input
            type="text"
            placeholder="Search Restaurant"
            className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[380px] sm:w-[520px] md:w-[600px] lg:w-[640px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
          />
        </div>
        <div className=" font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px]  text-center">
          Top Restaurant
        </div>
        <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
          {food.map((item) => (
            <Food_items key={item.Item_ID} data={item} />
          ))}
        </div>
        <div className="mt-[40px] font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px]  text-center">
          Cuisines
        </div>
        <div className="w-full relative mx-auto">
          <button
            onClick={() => scroll("left")}
            className="absolute left-[60px] top-[48%]  transform -translate-y-1/2 bg-white text-amber-600 font-bold p-2 rounded-full shadow-lg"
          >
            <FaArrowLeft />
          </button>
          <div
            ref={scrollRef}
            className=" flex gap-[10px]  overflow-x-scroll scrollbar-hide p-2 w-[85%] mx-auto "
          >
            <div className="  flex justify-center gap-[10px]">
              <div className=" flex flex-col gap-[5px]">
                <div className=" h-[130px] w-[200px]">
                  <img
                    src="/images/fastfood.jpg"
                    className="h-[100%] w-[100%]"
                  />
                </div>
                <div className=" text-[18px] font-semibold">FastFood</div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className=" h-[130px] w-[200px]">
                  <img
                    src="/images/italin.webp"
                    className="h-[100%] w-[100%]"
                  />
                </div>
                <div className=" text-[18px] font-semibold">Italian Food</div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className=" h-[130px] w-[200px]">
                  <img src="/images/chines.jpg" className="h-[100%] w-[100%]" />
                </div>
                <div className=" text-[18px] font-semibold">Chinese Food</div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className=" h-[130px] w-[200px]">
                  <img src="/images/sea.jpg" className="h-[100%] w-[100%]" />
                </div>
                <div className=" text-[18px] font-semibold">Sea Food</div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className=" h-[130px] w-[200px]">
                  <img
                    src="/images/mexican.jpg"
                    className="h-[100%] w-[100%]"
                  />
                </div>
                <div className="text-[18px] font-semibold">Mexican Food</div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className=" h-[130px] w-[200px]">
                  <img
                    src="/images/desert.webp"
                    className="h-[100%] w-[100%]"
                  />
                </div>
                <div className="text-[18px] font-semibold">Dessert</div>
              </div>
            </div>
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-[60px] top-[48%]  transform -translate-y-1/2 bg-white text-amber-600 font-bold p-2 rounded-full shadow-lg"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="mt-[10px]">
          <div className=" font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px]  text-center">
            Top Brands
          </div>
          <div className=" flex flex-row gap-[20px] sm:gap-[0px] justify-center items-center sm:flex-col w-[100%] h-[85vh] sm:h-[60vh] md:h-[67svh] lg:h-[70vh]">
            <div className=" flex flex-col sm:flex-row  gap-[15px] lg:gap-[20px] items-center justify-center  sm:w-[100%] h-[100%] ">
              <div className="flex flex-col gap-[5px] ">
                <div className=" h-[120px] w-[170px] sm:h-[140px]  sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                  <img
                    src="/images/mac.webp"
                    className="size-full object-cover"
                  />
                </div>
                <div className=" text-center">
                  <Link className="text-[18px]  font-semibold ">Mcdonald</Link>
                </div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className=" border-red-700 h-[120px] w-[170px] sm:h-[140px] sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                  <img
                    src="/images/kfc.png"
                    className="size-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <Link className="text-[18px]  font-semibold  ">Kfc</Link>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className=" h-[120px] w-[170px] sm:h-[140px] sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                  <img
                    src="/images/14 streets.jpg"
                    className="size-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <Link className="text-[18px]  font-semibold  ">
                    14 Street Pizza
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row gap-[15px] lg:gap-[20px] items-center justify-center  sm:w-[100%] h-[100%] ">
              <div className=" flex flex-col gap-[5px]">
                <div className=" border-red-700 h-[120px] w-[170px] sm:h-[140px] sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                  <img
                    src="/images/domions.jpg"
                    className="size-full object-cover"
                  />
                </div>
                <div className=" text-center">
                  <Link className="text-[18px]  font-semibold ">Dominos</Link>
                </div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className="h-[120px] w-[170px] sm:h-[140px] sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                  <img
                    src="/images/dunkin donuts.jpg"
                    className="size-full object-cover"
                  />
                </div>
                <div className=" text-center">
                  <Link className="text-[18px]  font-semibold ">
                    Dunkin Donuts
                  </Link>
                </div>
              </div>
              <div className=" flex flex-col gap-[5px]">
                <div className="h-[120px] w-[170px] sm:h-[140px] sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                  <img
                    src="/images/hardees.png"
                    className="size-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <Link className="text-[18px] text-amber-700 font-semibold  ">
                    Hardee's
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MenuPage;

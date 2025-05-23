import Header from "../components/Header";
// import food from "../../food_items.json";
import Food_items from "../components/fooditems";
import { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import LoginPromptModal from "../components/loggedInmodel";
function MenuPage() {
  const Navigate = useNavigate();
  const [restaurant, Setrestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  const [isloggedIn, setisloggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [catsec, setcatsec] = useState([]);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/chkLogin", {
          credentials: "include", // ✅ Send cookies with request
        });
        const data = await response.json();
        setisloggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Failed to fetch auth status", error);
      }
    };

    fetchAuthStatus(); // ✅ Call it here, outside of itself
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [menu]);
  console.log(isloggedIn);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:3000/menu/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const cat = data.cat;
      setcatsec(cat);
      console.log("Data FETCHED", cat);
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("http://localhost:3000/menu/getAllmenu", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          return { message: "Something went wrong" };
        }
        const data = await res.json();
        const items = data.menu.slice(40, 58);
        console.log("Fetched data:", items);
        setMenu(items);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMenu();
  }, []);
  useEffect(() => {
    const fetchRest = async () => {
      try {
        const res = await fetch("http://localhost:3000/restaurant/allRest", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        const data = await res.json();
        const rest = data.row.slice(0, 6);
        Setrestaurant(rest);
        console.log("restaurants", rest);
      } catch (err) {
        console.error("Restaurant fetch error:", err.message);
      }
    };
    fetchRest();
  }, []);
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
      <div className="">
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
          {menu.map((item) => (
            <div
              key={item.Item_ID}
              onClick={() => {
                if (isloggedIn) {
                  Navigate(`/itemdesc/${item.Item_ID}`);
                } else {
                  setShowModal(true);
                }
              }}
              className="cursor-pointer"
            >
              <Food_items key={item.Item_ID} data={item} />
            </div>
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
            {catsec.map((cat) => {
              return (
                <div key={cat.CAT_ID}>
                  <Link to={`/cuisine/${cat.Category}`}>
                    <div className=" h-[130px] w-[200px]">
                      <img src={cat.CAT_IMG} className="h-[100%] w-[100%]" />
                    </div>
                    <div className=" text-[18px] font-semibold">
                      {cat.CAT_NAME}
                    </div>
                  </Link>
                </div>
              );
            })}
            {/* <div className="  flex justify-center gap-[10px]">
              <Link to="/cuisine">
                <div className=" flex flex-col gap-[5px]">
                  <div className=" h-[130px] w-[200px]">
                    <img
                      src="/images/fastfood.jpg"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className=" text-[18px] font-semibold">FastFood</div>
                </div>
              </Link>
              <Link to="/cuisine">
                <div className=" flex flex-col gap-[5px]">
                  <div className=" h-[130px] w-[200px]">
                    <img
                      src="/images/italin.webp"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className=" text-[18px] font-semibold">Italian Food</div>
                </div>
              </Link>
              <Link to="/cuisine">
                <div className=" flex flex-col gap-[5px]">
                  <div className=" h-[130px] w-[200px]">
                    <img
                      src="/images/chines.jpg"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className=" text-[18px] font-semibold">Chinese Food</div>
                </div>
              </Link>
              <Link to="/cuisine">
                <div className=" flex flex-col gap-[5px]">
                  <div className=" h-[130px] w-[200px]">
                    <img src="/images/sea.jpg" className="h-[100%] w-[100%]" />
                  </div>
                  <div className=" text-[18px] font-semibold">Sea Food</div>
                </div>
              </Link>
              <Link to="/cuisine">
                <div className=" flex flex-col gap-[5px]">
                  <div className=" h-[130px] w-[200px]">
                    <img
                      src="/images/mexican.jpg"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className="text-[18px] font-semibold">Mexican Food</div>
                </div>
              </Link>
              <Link to="/cuisine">
                <div className=" flex flex-col gap-[5px]">
                  <div className=" h-[130px] w-[200px]">
                    <img
                      src="/images/desert.webp"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div className="text-[18px] font-semibold">Dessert</div>
                </div>
              </Link>
            </div> */}
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
          <div className=" flex flex-row gap-[20px] sm:gap-[0px] justify-center items-center sm:flex-col w-[100%] h-[95vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] ">
            <div className=" flex flex-col sm:flex-row  gap-[15px] lg:gap-[20px] items-center justify-center  sm:w-[100%] h-[100%] ">
              {/* <Link to={`/brandpage/${restaurant[0].Restaurant_ID}`}>
             
              <div className="flex flex-col gap-[5px] ">
                  <div className=" h-[120px] w-[170px] sm:h-[140px]  sm:w-[190px] md:h-[160px]  md:w-[200px] lg:h-[170px]  lg:w-[220px] shadow-sm drop-shadow-md">
                    <img
                      src="/images/mac.webp"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className=" text-center">
                    <Link className="text-[18px]  font-semibold ">
                      {restaurant.map((rest) => (
                        <div key={rest.Restaurant_ID}>
                          <h2>{rest.Business_Name}</h2>
                          {/* <p>ID: {rest.Restaurant_ID}</p> */}
              {/* </div>
                      ))}
                    </Link>
                  </div>
                </div>
              </Link> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-[20px]">
                {restaurant.map((rest) => (
                  <div
                    key={rest.Restaurant_ID}
                    onClick={() => {
                      if (isloggedIn) {
                        Navigate(`/brandpage/${rest.Restaurant_ID}`);
                      } else {
                        setShowModal(true);
                      }
                    }}
                    className="cursor-pointer "
                  >
                    <div className="flex flex-col gap-[5px] ">
                      <div className=" h-[120px] w-[170px] sm:h-[140px] sm:w-[190px] md:h-[160px] md:w-[200px] lg:h-[170px] lg:w-[220px] shadow-sm drop-shadow-md">
                        <img
                          src={`http://localhost:3000${rest.Img}`}
                          className="size-full object-cover"
                          alt={rest.Business_Name}
                        />
                      </div>
                      <div className=" text-center">
                        <h2 className="text-[18px] font-semibold">
                          {rest.Business_Name}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* is ka container hi tu banana hai aapko is map method ka */}
              {/* <div className=" flex flex-col gap-[5px]">
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
                  </Link> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <LoginPromptModal
          onClose={() => setShowModal(false)}
          Login={() => {
            Navigate("/sign");
          }}
        />
      )}

      <Footer />
    </>
  );
}
export default MenuPage;

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
        <div className="mt-[20px] ">
          <div className="text-center text-[25px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-semibold">
            Burgers
          </div>
          <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
            {burgers.map((item) => (
              <Food_items key={item.Item_ID} data={item} />
            ))}
          </div>
        </div>
        <div className="mt-[20px] ">
          <div className="text-center text-[25px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-semibold">
            Pizza
          </div>
          <div className="mt-[20px] grid grid-col-1 sm:grid-cols-3 gap-[20px]">
            {burgers.map((item) => (
              <Food_items key={item.Item_ID} data={item} />
            ))}
          </div>
        </div>
        <div className="mt-[20px] ">
          <div className="text-center text-[25px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-semibold">
            Dessert
          </div>
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

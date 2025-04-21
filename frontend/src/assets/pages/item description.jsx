import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDescription() {
  const { Item_ID } = useParams();
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/getItem/${Item_ID}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, [Item_ID]);

  return (
    <>
      <div className=" w-[100%] h-[100vh]">
        <div className="flex flex-col justify-center items-center h-[100%] lg:w-[50%]  md:w-[70%]  sm:w-[80%]   w-[100%] mx-auto ">
          <div className="  w-[380px] h-[230px] sm:w-[490px]">
            <img
              src={item ? `http://localhost:3000${item.Img}` : " "}
              alt="Item pic "
              className="size-full object-contain"
            />
          </div>
          <div className=" w-[380px]  sm:w-[490px] pt-[10px] pb-[10px] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] font-semibold">
            {item ? item.Name : " "}
          </div>
          <div className=" w-[380px]  sm:w-[490px]  text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] font-semibold">
            {item ? item.Price : " "}
          </div>
          <div className="  w-[380px]  sm:w-[490px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] ">
            {item ? item.Description : " "}
          </div>

          <div className="relative top-[20px] flex  justify-center gap-[10px] w-[380px]  sm:w-[490px]">
            <div className="flex items-center  justify-center gap-[10px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-semibold bg-amber-500 text-white w-[200px] pt-[10px] pb-[10px] rounded-full">
              <div onClick={increment}>+</div>
              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-bold">
                {count}
              </div>
              <div onClick={decrement}>-</div>
            </div>
            <div className="flex items-center  justify-center w-[200px]">
              <Link
                to="/cart"
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-semibold bg-amber-500 text-white  pt-[10px] pb-[10px] pl-[50px] pr-[50px] rounded-full"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemDescription;

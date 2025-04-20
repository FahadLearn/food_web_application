import { Link } from "react-router-dom";

function AddCart({ data }) {
  const { Item_ID, Name, price, Image_url, quantity, des } = data;

  return (
    <div className="">
      <ul
        key={Item_ID}
        className="flex  justify-center items-center pt-[10px] pb-[10px] gap-[40px] "
      >
        <li className="h-[100px] w-[100px] ">
          <img
            src={Image_url}
            className=" h-[100%] w-[100%] object-fit  rounded-[10px] "
          />
        </li>

        <li>
          <li className=" text-[18px] font-semibold">{Name}</li>
          <li className=" text-[18px] ">{des}</li>

          <li className="text-[18px] font-semibold ">Rs.{price}</li>

          <Link>
            <li className=" flex justify-center gap-[10px] w-[130px] pt-[5px] pb-[5px] rounded-[20px] bg-[#212121]">
              <li className="border-2 font-bold text-[18px] h-[30px] w-[30px] text-center bg-amber-600 text-white border-amber-600 rounded-[10px]">
                -
              </li>
              <li className="text-[18px] text-white">{quantity}</li>
              <li className="border-2 font-bold text-[18px] h-[30px] w-[30px] text-center bg-amber-600 text-white border-amber-600 rounded-[10px]">
                +
              </li>
            </li>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default AddCart;

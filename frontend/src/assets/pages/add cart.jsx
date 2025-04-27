import { useCart } from "../../context/CartContext";

function AddCart({ data }) {
  const { updateQuantity, removeFromCart } = useCart(); // CartContext se yeh function lena hoga

  const { Item_ID, Name, Price, Description, Img, quantity } = data;

  return (
    <div className="">
      <ul
        key={Item_ID}
        className="flex justify-center items-center pt-[10px] pb-[10px] gap-[40px] border-2"
      >
        <li className="h-[100px] w-[100px]">
          <img
            src={`http://localhost:3000${Img}`}
            className="h-[100%] w-[100%] object-fit rounded-[10px]"
          />
        </li>

        <li className="w-[25%]">
          <li className="text-[18px] font-semibold">{Name}</li>
          <li className="text-[18px]">{Description}</li>
          <li className="text-[18px] font-semibold">Rs.{Price}</li>

          <div className="flex justify-center gap-[10px] w-[130px] pt-[5px] pb-[5px] rounded-[20px] bg-[#212121]">
            <button
              onClick={() => updateQuantity(Item_ID, quantity - 1)}
              className="border-2 font-bold text-[18px] h-[30px] w-[30px] text-center bg-amber-600 text-white border-amber-600 rounded-[10px]"
            >
              -
            </button>
            <li className="text-[18px] text-white">{quantity}</li>
            <button
              onClick={() => updateQuantity(Item_ID, quantity + 1)}
              className="border-2 font-bold text-[18px] h-[30px] w-[30px] text-center bg-amber-600 text-white border-amber-600 rounded-[10px]"
            >
              +
            </button>
          </div>
          <div className="flex justify-center gap-[10px] w-[130px] pt-[5px] pb-[5px] rounded-[20px] bg-[#212121]">
            <button
              onClick={() => removeFromCart(Item_ID)}
              className="border-2 font-bold text-[18px] text-[red]"
            >
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AddCart;

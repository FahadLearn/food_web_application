import { Link, useNavigate } from "react-router-dom";

function Food_items({ data, isLoggedIn, setShowModal }) {
  const {
    Item_ID,
    Name,
    Category,
    Price,
    Discount,
    Description,
    Img,
    Availability,
  } = data;

  const Navigate = useNavigate();

  // Handle click event
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behavior

    if (isLoggedIn) {
      Navigate(`/itemdesc/${Item_ID}`); // Navigate to item description if logged in
    } else {
      setShowModal(true); // Show the login modal if not logged in
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <ul key={Item_ID} className="flex flex-col gap-[2px]">
        <li className="w-[380px] sm:w-[200px] sm:h-[130px] md:w-[230px] md:h-[160px] lg:w-[320px] lg:h-[200px] mx-auto rounded-[10px]">
          <img
            src={`http://localhost:3000${Img}`}
            alt={Name}
            loading="lazy"
            className="h-[100%] w-[100%] object-fit rounded-[10px]"
          />
        </li>

        <li className="flex justify-between mx-auto w-[380px] sm:w-[200px] md:w-[230px] lg:w-[320px]">
          <li className="text-[18px] sm:text-[14px] md:text-[18px] font-semibold">
            {Name}
          </li>
          <li className="text-[18px] sm:text-[14px] md:text-[16px] text-amber-600 font-semibold">
            ${Price}
          </li>
        </li>
        <li className="w-[380px] sm:w-[200px] md:w-[230px] lg:w-[320px] text-[14px] sm:text-[11px] md:text-[12px] lg:text-[15px] mx-auto">
          {Description}
        </li>
        <li className="w-[380px] sm:w-[200px] md:w-[230px] lg:w-[320px] text-[16px] mx-auto font-semibold text-amber-600">
          {Availability}
        </li>
      </ul>
    </div>
  );
}

export default Food_items;

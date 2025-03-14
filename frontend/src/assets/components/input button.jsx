import { Link } from "react-router-dom";

function Btn({ text, to }) {
  return (
    <>
      <Link
        to={to}
        className="text-[20px] pt-[12px] pb-[12px] pr-[130px] pl-[130px] sm:text-[20px] sm:pt-[12px] sm:pb-[12px] sm:pr-[130px] sm:pl-[130px] md:text-[25px] md:pt-[12px] md:pb-[12px] md:pr-[130px] md:pl-[130px] lg:pt-[12px] lg:pb-[12px] lg:pr-[130px] lg:pl-[130px] rounded-[30px] lg:text-[25px] font-bold text-amber-500 bg-[#ECECEC] shadow-lg shadow-gray-400/80 translate-y-1"
      >
        {text}
      </Link>
    </>
  );
}
export default Btn;

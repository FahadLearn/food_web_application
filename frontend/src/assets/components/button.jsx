import "./style.css";
function Button({ text, bgColor, color, border }) {
  return (
    <>
      <div>
        <a
          href="#"
          className={`font-(family-name:--font2) border-2  pt-[6px] pb-[6px] pl-[10px] pr-[10px] text-[10px] font-bold rounded-full  transition duration-500 ease-in-out hover:bg-amber-500 hover:border-amber-500 hover:text-white sm:border-2  sm:text-[13px] sm:pt-[8px] sm:pb-[8px] sm:pl-[13px] sm:pr-[13px] md:text-[17px] md:pt-[10px] md:pb-[10px] md:pl-[20px] md:pr-[20px] lg:border-2  lg:text-[20px] lg:pt-[11px] lg:pb-[11px] lg:pl-[22px] lg:pr-[22px] ${bgColor}  ${color} ${border} `}
        >
          {text}
        </a>
      </div>
    </>
  );
}

export default Button;

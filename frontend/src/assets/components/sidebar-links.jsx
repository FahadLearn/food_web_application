import { Link } from "react-router-dom";

function SidebarLinks({ text, bg, color, hover, to }) {
  return (
    <>
      <div
        className={`border-t-1 border-gray-200 pl-[3px]   transform duration-300 linear  ${bg} ${color} ${hover}`}
      >
        <Link to={to} className=" text-[12px]  ">
          {text}
        </Link>
      </div>
    </>
  );
}

export default SidebarLinks;

function SidebarLinks({ text, bg, color, hover }) {
  return (
    <>
      <div
        className={`border-t-1 border-gray-200 pl-[3px]   transform duration-300 linear  ${bg} ${color} ${hover}`}
      >
        <a href="#" className=" text-[12px]  ">
          {text}
        </a>
      </div>
    </>
  );
}

export default SidebarLinks;

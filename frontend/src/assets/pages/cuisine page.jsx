function Cuisine() {
  return (
    <>
      <div className="border-2">
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
          {food.map((item) => (
            <Food_items key={item.Item_ID} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Cuisine;

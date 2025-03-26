import PartnerShip from "./partnership";

function SectionTwo() {
  return (
    <>
      <div className=" w-[100%] h-[90vh] flex flex-col items-center gap-[10px] sm:mt-[40px] sm:bg-none sm:flex sm:justify-center  sm:flex-row sm:w-[100%] sm:h-[35vh] sm:gap-[15px] md:mt-[60px] md:flex md:flex-row md:justify-center md:w-[100%] md:h-[45vh] md:gap-[20px] lg:w-[100%] lg:h-[55vh] lg:gap-[20px] lg:flex lg:justify-center  lg:flex-row lg:mt-[65px]">
        <PartnerShip
          src="/images/pic2.jpg"
          text="Earn more with lower fees"
          h1="Signup as a business"
          h2="Partner with us"
          btn="Get Started "
          to="/restaurantsignup"
        />
        <PartnerShip
          src="/images/pic3.jpg"
          text="Avail exclusive perks"
          h1="Signup as a rider"
          h2="Ride with us"
          btn="Get Started"
          to="/Rider_Sign_up"
        />
      </div>
    </>
  );
}
export default SectionTwo;

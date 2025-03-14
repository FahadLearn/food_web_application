import Footer from "../components/footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="h-[100vh] w-[100%]">
        <div
          className="bg-cover bg-no-repeat bg-center  w-[100%] h-[100%] "
          style={{
            backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.71), rgba(12, 12, 12, 0.71)), url('/images/conatct.jpg')`,
          }}
        >
          <div className=" flex flex-col justify-center gap-[45px]  h-[100%] sm:w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
            <div className=" text-white border-white font-semibold text-center text-[35px] sm:text-[35px] md:text-[40px]  lg:text-[50px]">
              Contact Us
            </div>
            <div className="lg:h-[60%] w-[100%]">
              <div className="flex justify-center  w-[100%] h-[20%] gap-[10px] sm:h-[20%] sm:gap-[30px] md:h-[20%] md:gap-[40px] lg:h-[20%] lg:gap-[50px]">
                <div className="">
                  <label className="text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                    First Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="text-white outline-none border-2 w-[122px] sm:w-[170px] md:w-[170px] lg:w-[170px] pt-[5px]  pb-[5px] pr-[7px] pl-[7px] border-white "
                  />
                </div>
                <div className="">
                  <label className="text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                    Last Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="text-white outline-none border-2 w-[122px] sm:w-[170px] md:w-[170px] lg:w-[170px] pt-[5px]  pb-[5px] pr-[7px] pl-[7px] border-white "
                  />
                </div>
                <div className="">
                  <label className="text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    className="text-white outline-none border-2 w-[122px] sm:w-[170px] md:w-[170px] lg:w-[170px] pt-[5px]  pb-[5px] pr-[7px] pl-[7px] border-white "
                  />
                </div>
              </div>

              <div className="flex justify-center  w-[100%] h-[20%] sm:h-[20%] md:h-[20%] lg:h-[20%] ">
                <div className="">
                  <label className="text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                    Subject
                  </label>
                  <br />
                  <input
                    type="text"
                    className="text-white outline-none border-2 w-[385px] sm:w-[570px] md:w-[590px] lg:w-[610px] pt-[6px]  pb-[6px] pr-[7px] pl-[7px] border-white "
                  />
                </div>
              </div>
              <div className="flex justify-center  w-[100%] ">
                <div className="">
                  <label className="text-white text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                    Write a message
                  </label>
                  <br />
                  <textarea
                    rows="5"
                    className="text-white outline-none
                  border-2 w-[385px] sm:w-[570px] md:w-[590px] lg:w-[610px]
                  pt-[6px] pb-[6px] pr-[7px] pl-[7px] border-white "
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center w-[100%]  relative top-[5px]">
                <div className="">
                  <input
                    type="Submit"
                    value="Submit"
                    className="text-white bg-amber-500/50  border-amber-500/10  outline-none border-2 w-[385px] sm:w-[570px] md:w-[590px] lg:w-[610px] pt-[6px]  pb-[6px] pr-[7px] pl-[7px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;

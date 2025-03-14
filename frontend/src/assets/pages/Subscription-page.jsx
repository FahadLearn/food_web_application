import Header from "../components/Header";
import Footer from "../components/footer";
import Button from "../components/button";

function Subscription() {
  return (
    <>
      <Header />
      <div className=" w-[100%] h-[40vh] sm:h-[60vh] bg-amber-500 flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-[5px]">
          <h1 className="text-center font-bold text-white text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]">
            Get Exclusive Discounts & Free Deliveries!
          </h1>
          <p className="text-center text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] ">
            Join our subscription plans and save money on every order.
          </p>
          <div className=" flex justify-center relative top-[10px] sm:top-[40px]">
            <Button
              text="Choose a plan"
              bgColor="bg-white "
              border="border-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-[20px] ">
        <div className="text-center text-[30px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-semibold">
          Choose your plan
        </div>
        <div className="mt-[20px] sm:mt-[20px] md:mt-[25px] lg:mt-[35px] items-center flex flex-col sm:flex-row justify-center gap-[30px] sm:gap-[10px] lg:gap-[20px] w-[100%] h-[120vh] sm:h-[45vh] md:h-[50vh] lg:h-[57vh]">
          <div className="flex flex-col justify-center gap-[10px] md:gap-[13px] w-[55%]  sm:w-[32%]  lg:w-[27%] h-[100%] rounded-[10px]  [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
            <h2 className=" font-bold text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Basic Plan
            </h2>
            <p className="text-gray-600 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              $9.99/month
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ Free delivery on orders over $30
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ Access to select menu items
            </p>
            <p className="text-gray-700  sm:text-[12px] "> </p>
            <div className="flex justify-center relative sm:top-[17px] ">
              <Button
                text="Subscribe"
                bgColor="bg-amber-500"
                border="border-amber-500"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-[7px] md:gap-[9px]  w-[55%] sm:w-[32%] lg:w-[27%] h-[100%] rounded-[10px]  [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
            <h2 className=" font-bold text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Standard Plan
            </h2>
            <p className="text-gray-600 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              $19.99/month
            </p>
            <p className="text-gray-700  text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center ">
              ✔ Free delivery on orders over $30
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  text-center">
              ✔ 5% discount on menu items
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px]  md:text-[14px] lg:text-[16px] text-center">
              ✔ Exclusive offers
            </p>
            <div className=" flex justify-center relative sm:top-[15px] ">
              <Button
                text="Subscribe"
                bgColor="bg-amber-500"
                border="border-amber-500"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[7px] md:gap-[9px]  w-[55%] sm:w-[32%]  lg:w-[27%] h-[100%] rounded-[10px] [box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]">
            <h2 className=" font-bold text-center text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              Standard Plan
            </h2>
            <p className="text-gray-600 text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              $19.99/month
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ Free delivery on orders over $30
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center">
              ✔ 5% discount on menu items
            </p>
            <p className="text-gray-700 text-[10px] sm:text-[12px]  md:text-[14px] lg:text-[16px] text-center">
              ✔ Exclusive offers
            </p>
            <div className="flex justify-center relative sm:top-[15px] ">
              <Button
                text="Subscribe"
                bgColor="bg-amber-500"
                border="border-amber-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px] h-[52vh] sm:h-[35vh] bg-gray-200 flex flex-col items-center justify-center gap-[25px] ">
        <div className="text-center font-bold text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px]">
          Why Choose Us?
        </div>
        <div className=" flex-col sm:flex-row flex justify-center items-center gap-[20px]">
          <div className="[box-shadow:0px_3px_8px_rgba(0,0,0,0.24)]  bg-white rounded-[5px] text-center  font-semibold md:text-[18px] lg:text-[20px] w-[250px] sm:w-[180px] md:w-[200px] lg:w-[250px] pt-[20px] pb-[20px] hover:bg-amber-500 hover:text-white duration-400">
            24/7 Support
          </div>
          <div className="[box-shadow:0px_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-[5px] text-center font-semibold lg:text-[20px]  w-[250px] sm:w-[180px] md:w-[200px] lg:w-[250px] pt-[20px] pb-[20px] hover:bg-amber-500 hover:text-white duration-400">
            High Security
          </div>
          <div className="[box-shadow:0px_3px_8px_rgba(0,0,0,0.24)] bg-white rounded-[5px] text-center font-semibold lg:text-[20px]  w-[250px] sm:w-[180px] md:w-[200px] lg:w-[250px] pt-[20px] pb-[20px] hover:bg-amber-500 hover:text-white duration-400">
            Affordable Plans
          </div>
        </div>
      </div>

      <section id="faq" className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left">
          <div className="mb-4">
            <h3 className="font-semibold">Can I cancel anytime?</h3>
            <p className="text-gray-600">
              Yes, you can cancel your subscription anytime.
            </p>

            <div className="mt-2 flex gap-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                👍 Helpful
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                👎 Not Helpful
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Do you offer refunds?</h3>
            <p className="text-gray-600">
              We have a 7-day refund policy for new subscribers.
            </p>

            <div className="mt-2 flex gap-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                👍 Helpful
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                👎 Not Helpful
              </button>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Did not find your answer?</h3>
            <p className="text-gray-600">
              Ask us your question, and we will get back to you.
            </p>
            <input
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="Type your question here..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </section>

      <div className="relative top-[40px] flex justify-center items-center h-[40vh] bg-amber-500">
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-bold text-white text-[30px] sm:text-[35px]  md:text-[35px] lg:text-[40px]">
            Ready to Get Started?
          </h2>
          <div className="flex justify-center">
            <a
              href="#"
              className=" bg-white text-amber-500 font-semibold  pt-[15px] pb-[15px] pl-[40px] pr-[40px] rounded-[30px]"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Subscription;

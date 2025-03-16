import { useState } from "react";

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("");
  return (
    <>
      <div className="border-2 w-[100%]  border-red-400">
        <div className="border-2 border-amber-500 pl-[20px] lg:pl-[40px] font-semibold text-[30px] sm:text-[30px] md:text-[40px] lg:text-[40px] pt-[12px] pb-[12px] bg-amber-500 text-white">
          Checkout
        </div>
        <div className="border-2 border-orange-500  ">
          <div className=" flex flex-col h-[25vh] justify-center  gap-[20px]  pl-[20px] lg:pl-[40px]">
            <label className="text-amber-600 font-semibold text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px] pl-[10px]">
              Delivery address
            </label>

            <input
              type="text"
              className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] sm:w-[570px] md:w-[620px] lg:w-[650px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
              placeholder="Enter your Address"
              required
            />
          </div>
          <div className=" flex flex-col h-[60vh] sm:h-[40vh] justify-center gap-[20px] pl-[20px] lg:pl-[40px]">
            <label className="text-amber-600  font-semibold text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px] pl-[10px]">
              Personal details
            </label>
            <div className=" flex flex-col sm:flex-row gap-[20px]">
              <input
                type="text"
                name="first_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last_name"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Last Name"
                required
              />
            </div>
            <div className="  flex flex-col sm:flex-row gap-[20px]">
              <input
                type="tel"
                name="Phone_no"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Phone_no"
                required
              />
              <input
                type="text"
                name="email"
                className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px] "
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <div className=" flex flex-col h-[110vh] sm:h-[100vh] border-2  gap-[20px] pl-[20px] lg:pl-[40px] ">
            <label className="text-amber-600  font-semibold text-[25px] sm:text-[25px] md:text-[30px] lg:text-[30px] pl-[10px]">
              Payment
            </label>
            <div className=" flex gap-[5px] text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]">
              <input
                type="radio"
                name="payment"
                value="mastercard"
                className="h-[15px] w-[20px] relative top-[6px]"
                onChange={(e) => setSelectedPayment(e.target.value)}
                required
              />
              <span className="text-lg">Mastercard</span>
            </div>
            <div className="flex gap-[5px] text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]">
              <input
                type="radio"
                name="payment"
                value="jazzcash"
                className="h-[15px] w-[20px] relative top-[6px]"
                onChange={(e) => setSelectedPayment(e.target.value)}
                required
              />
              <span className="text-lg">JazzCash</span>
            </div>
            <div className=" flex gap-[5px] text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]">
              <input
                type="radio"
                name="payment"
                value="cod"
                className="h-[15px] w-[20px] relative top-[6px]"
                onChange={(e) => setSelectedPayment(e.target.value)}
                required
              />
              <span className="text-lg">Cash on Delivery</span>
            </div>

            {selectedPayment === "mastercard" && (
              <div className=" h-[50vh] flex flex-col gap-[15px] ">
                <div className=" flex flex-col  justify-center  gap-[5px]  ">
                  <label className="text-amber-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] pl-[10px]">
                    Card Number
                  </label>

                  <input
                    type="text"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] sm:w-[610px] md:w-[620px] lg:w-[650px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                    placeholder="Enter card no"
                    required
                  />
                </div>
                <div className=" flex flex-col justify-center  gap-[5px]  ">
                  <label className="text-amber-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] pl-[10px]">
                    Name of the card holder
                  </label>

                  <input
                    type="text"
                    className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] sm:w-[610px] md:w-[620px] lg:w-[650px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px]">
                  <div className=" flex flex-col justify-center  gap-[5px]  ">
                    <label className="text-amber-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] pl-[10px]">
                      Expiry date
                    </label>

                    <input
                      type="text"
                      className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className=" flex flex-col justify-center  gap-[5px]  ">
                    <label className="text-amber-600 font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] pl-[10px]">
                      cvc
                    </label>

                    <input
                      type="text"
                      className="text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[360px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]"
                      placeholder="Enter code"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedPayment === "jazzcash" && (
              <div className="p-4 border rounded-lg bg-yellow-100">
                <h3 className="text-lg font-semibold">JazzCash Payment</h3>
                <p className="text-gray-700">
                  Send payment to **03XXXXXXXXX** and enter the transaction ID.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

<div className=" flex flex-col h-[50vh]  justify-center gap-[20px] ">
  <label className="font-semibold text-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] pl-[10px]">
    Payment
  </label>
  <div className=" flex flex-col gap-[10px]">
    <div className=" flex gap-[5px] text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[400px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]">
      <input
        type="radio"
        name="payment"
        value="mastercard"
        className="h-[15px] w-[20px] relative top-[6px]"
      />
      <span className="text-lg">Mastercard</span>
    </div>
    <div className="flex gap-[5px] text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[400px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]">
      <input
        type="radio"
        name="payment"
        value="jazzcash"
        className="h-[15px] w-[20px] relative top-[6px]"
      />
      <span className="text-lg">JazzCash</span>
    </div>
    <div className=" flex gap-[5px] text-gray-500  outline-none rounded-[30px] bg-[#ECECEC] text-[16px] w-[400px] pt-[15px] pb-[15px] pr-[20px] pl-[20px]">
      <input
        type="radio"
        name="payment"
        value="cod"
        className="h-[15px] w-[20px] relative top-[6px]"
      />
      <span className="text-lg">Cash on Delivery</span>
    </div>
  </div>
</div>;

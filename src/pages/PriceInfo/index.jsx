import React from "react";

const PriceDetails = () => {
  return (
    <div className="flex flex-col h-full mt-4 font-worksans w-3/4">
      <div className="flex h-56 p-5 border-b-2 border-[#FCB512] font-bold flex-col w-full">
        <div className="flex text-lg py-4">Order Now</div>
        <div className="flex flex-1 text-lg">
          <h1 className="flex flex-1">Items:</h1>
          <p className="flex flex-1">1</p>
        </div>
        <div className="flex flex-1 text-lg">
          <h1 className="flex flex-1">You Pay:</h1>
          <p className="flex flex-1">₹9,500.00</p>
        </div>
        <div className="flex flex-1 text-lg">
          <h1 className="flex flex-1">You Say:</h1>
          <p className="flex flex-1">₹500.00</p>
        </div>
      </div>
      <div className="flex h-3/4 mt-6 flex-col w-full">
        <div className="flex p-5 flex-1 flex-col h-full w-full">
          <div className="flex flex-1 font-bold text-lg">Bought By:</div>
          <div className="flex flex-1">Aryan Negi</div>
        </div>
        <div className="flex p-5 flex-1 flex-col h-full w-full">
          {" "}
          <div className="flex flex-1 font-bold text-lg">Pickup Location:</div>
          <div className="flex flex-1">
            Shop No.3/36A, Maharaja Agrasen Marg, UV Block, Shalimar Bagh,
            Delhi, 110088
          </div>
        </div>
        <div className="flex p-5 flex-1 flex-col h-full w-full">
          {" "}
          <div className="flex flex-1 font-bold text-lg">
            Service Booked For:
          </div>
          <div className="flex flex-1 flex-col">
            <p>13-Apr, 2022 | Wednesday</p>
            <h2>1 PM - 2 PM</h2>
          </div>
        </div>
        <div className="flex flex-1 p-5 flex-col h-full w-full">
          {" "}
          <div className="flex flex-1 font-bold text-lg">Paying With:</div>
          <div className="flex flex-1 flex-col">
            <p>Mastercard</p>
            <h2>****8443</h2>
          </div>
        </div>
        <div className="flex items-center text-xl justify-center font-bold h-20 w-3/5 my-3 rounded-xl bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
          <p>Pay Now</p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;

import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setridePopupPanel(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 mt-2">
        New Ride is Available!
      </h3>
      <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-green-200 shadow-md shadow-orange-500 mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full"
            src="https://th.bing.com/th?id=OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO&w=203&h=307&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt=""
          />
          <h3 className="text-xl font-medium">Vanshika Kumari</h3>
        </div>
        <h5 className="font-semibold text-lg">4.4 Kms</h5>
      </div>
      <div className="flex gap-3 items-center justify-between flex-col">
        <div className="w-full mt-5">
          <div className="flex items-center gap-6 p-3 border-b-2">
            <i className="text-xl ri-map-pin-2-fill"></i>
            <div>
              <h3 className="font-medium text-xl">561/11-A</h3>
              <p className="text-base mt-1 text-gray-600">
                Near JJ Square, Gunupur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="font-medium text-xl">Mirchi Masala</h3>
              <p className="text-base mt-1 text-gray-600">
                Near BN Market, Gunupur, Rayagada
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-2">
            <i className="text-xl ri-currency-fill"></i>
            <div>
              <h3 className="font-medium text-xl">₹186.56</h3>
              <p className="text-base mt-1 text-gray-600">
                Online Payment Method, Cash
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 w-full">
        <button
            onClick={() => {
              props.setridePopupPanel(false);
            }}
            className="bg-orange-400 font-semibold text-gray p-3 px-8 rounded-lg text-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className=" bg-green-600 font-semibold text-white p-3 px-8 rounded-lg text-lg"
          >
            Accept
          </button>

        </div>
      </div>
    </div>
  );
};

export default RidePopUp;

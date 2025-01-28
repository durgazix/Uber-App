import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
          props.setConfirmRidePanel(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex gap-3 items-center justify-between flex-col">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
          alt=""
        />
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
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="w-full mt-5 bg-green-600 font-semibold text-white p-2 rounded-lg text-base"
        >
          Confirm your Vehicle
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;

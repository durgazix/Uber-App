import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-16"
          src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">DURGA</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">OD04 PT 6336</h4>
          <p className="text-sm text-gray-600">Black Defender Carbon fibre</p>
          <h3><i className="ri-star-s-fill"></i>4.9</h3>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;

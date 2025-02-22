import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div className="mt-5">
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 mt-2">Finish This Ride!</h3>
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
                Online Payment Method/Cash
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to="/captain-home"
            className="w-full mt-2 flex justify-center bg-green-600 font-semibold text-gray p-2 rounded-lg text-lg"
          >
            Complete This Ride
          </Link>
          <div>
          <h3 className="p-3 font-semibold mt-2 text-center text-lg ">I Hope you feel safe and Thankyou for taking ride With Durga&apos;s Cart .</h3>
          <p className="text-2xl text-center font-extrabold">----*_*----</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;

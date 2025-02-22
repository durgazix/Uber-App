import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState();

  const submitHandler = (e) => {
    e.preventDefult();
  };

  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
        className="absolute p-1 top-0 w-[94%] text-center"
      >
        <i className="text-3xl bg-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 mt-2">Confirm This Ride!</h3>
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
        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="bg-[#eee] px-12 py-3 font-mono text-xl rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter OTP"
            />
            <Link
              to="/captain-riding"
              className="w-full mt-6 flex justify-center bg-green-600 font-semibold text-gray p-2 rounded-lg text-lg"
            >
              Confirm Ride
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setridePopupPanel(false);
              }}
              className="w-full mt-2 bg-orange-400 font-semibold text-gray p-2 rounded-lg text-lg"
            >
              Cancel Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;

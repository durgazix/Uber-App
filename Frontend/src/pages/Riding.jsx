import React from "react";
import {Link} from 'react-router-dom'

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed h-10 w-10 right-2 top-2 bg-white rounded-full flex items-center justify-center ">
        <i className="text-2xl font-bold ri-home-8-fill"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
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
            <h3 className="text-lg font-medium">
              <i className="ri-star-s-fill"></i>4.9
            </h3>
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
      <button className="w-full mt-5 bg-green-600 font-semibold text-white p-2 rounded-lg text-base">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;

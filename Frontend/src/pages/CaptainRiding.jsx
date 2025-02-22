import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const FinishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(FinishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(FinishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className=" h-10 w-10 bg-white rounded-full flex items-center justify-center "
        >
          <i className="text-2xl font-bold ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.cMbOAjsxAPI-n13vcv9NYgHaE7?rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex justify-between items-center relative bg-orange-500">
        <h5 className="absolute p-1 top-0 w-[95%] text-center">
          <i className=" text-3xl ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Kms Away</h4>
        <button
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className="bg-green-600 text-white p-3 px-10 rounded-lg text-xl"
        >
          Complete Ride
        </button>
      </div>
      <div
        ref={FinishRidePanelRef}
        className="fixed w-full h-[90%] z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;

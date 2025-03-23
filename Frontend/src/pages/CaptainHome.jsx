import {useRef, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {

  const [ridePopupPanel, setridePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  
  const RidePopupPanelRef = useRef(null)
  const ConfirmRidePopupPanelRef = useRef(null)

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
      });
  }, []);
  
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(RidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(RidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.cMbOAjsxAPI-n13vcv9NYgHaE7?rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={RidePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={ConfirmRidePopupPanelRef} className="fixed w-full h-[90%] z-10 bottom-0 translate-y-full bg-white px-3 py-8">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setridePopupPanel={setridePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;

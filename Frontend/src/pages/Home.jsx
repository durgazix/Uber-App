import { useState, useRef, useContext, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocalSearchPanel from "../components/LocalSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [activeField, setActiveField] = useState("pickup"); 
  const [ fare, setFare ] = useState({})
  const [vehicleType, setVehicleType] = useState(null)

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

  useEffect(() => {
    if (socket && socket.connected && user._id) {
        console.log("Emitting join event...");
        socket.emit("join", { userType: "user", userId: user._id });
    }
}, [socket]);


  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
  }
  
  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          setDestinationSuggestions(response.data)
        } catch {
          // handle error
        }
  }
      
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20,
          // opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },[panelOpen]
  );
  
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  async function findTrip() {
    if (!pickup || !destination) {
      throw new Error('Pickup and destination are required');
    }
      setVehiclePanel(true);
      setPanelOpen(false);
  
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}rides/get-fare`, {
        params: { pickup, destination },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    setFare(response.data);
    console.log(response.data) 
    }

    async function createRide(){
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}rides/create`, {
        pickup, destination, vehicleType },
        {headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }}
    );
      console.log(response.data)
    }
  
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt=""
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="bg-[#abe3ee] h-[30%] p-6 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-3 text-3xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[40%] left-12 bg-black rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#ffffff] px-12 py-3 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your pick-up location..."
            />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#ffffff] px-12 py-3 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination..."
            />
          </form>
          <button
          onClick={findTrip}
          className="bg-[#27c7eb] text-black px-4 py-2 rounded-lg mt-3 w-full">Find Trip</button>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocalSearchPanel
            suggestions={activeField === "pickup" ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            setActiveField={setActiveField}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
        <VehiclePanel
          selectVehicle={setVehicleType}
          fare={fare}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 pt-16"
      >
        <ConfirmRide
          createRide={createRide}
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
          fare={fare}
          vehicleType={vehicleType}
          pickup={pickup}
          destination={destination}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 pt-16"
      >
        <LookingForDriver 
          pickup={pickup}
          destination={destination}
          setVehicleFound={setVehicleFound}
          fare={fare}
          vehicleType={vehicleType}
          />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 pt-16"
      >
        <WaitingForDriver 
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
          waitingForDriver={waitingForDriver}
        />
      </div>
    </div>
  );
};

export default Home;

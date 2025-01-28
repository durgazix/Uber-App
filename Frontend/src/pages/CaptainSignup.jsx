import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();


  const subMitHandler = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }    
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}captains/register`,
        CaptainData,
        config
      );
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.user);
        localStorage.setItem('token', data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="py-5 px-6 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form
          onSubmit={(e) => {
            subMitHandler(e);
          }}
        >
          <h3 className="text-lg font-semibold mb-2">What&apos;s our Captain&apos;s Name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">What&apos;s our Captain&apos;s Email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-semibold mb-2">Captain Enter the Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h3 className="text-lg font-semibold mb-2">About Vehicle</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-[#eeeeee] w-full rounded px-4 py-2 border text-lg"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="Bike">Bike</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placehold:text-base">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          All Ready have an Account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service Apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;

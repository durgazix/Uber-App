import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setCaptainData] = useState("");

  const subMitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
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
          <h3 className="text-lg font-semibold mb-2">What's our Captain's Name</h3>
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
          <h3 className="text-lg font-semibold mb-2">What's our Captain's Email</h3>
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
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placehold:text-base">
            Login
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

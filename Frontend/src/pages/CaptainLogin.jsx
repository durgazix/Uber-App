// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { CaptainDataContext } from "../context/CaptainContext";


// const CaptainLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const {captain, setCaptain} = React.useContext(CaptainDataContext);
//   const navigate = useNavigate();

//   const subMitHandler = async (e) => {
//     e.preventDefault();
//     const captainLog = {
//       email: email,
//       password: password,
//     };
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}captains/login`,
//         captainLog,
//         config
//       );
//       if (response.status === 200) {
//         const data = response.data;
//         setCaptain(data.captain);
//         localStorage.setItem('token', data.token);
//         navigate("/captain-home");
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error("Server responded with an error:", error.response.data);
//       } else if (error.request) {
//         console.error("No response received:", error.request);
//       } else {
//         console.error("Error setting up request:", error.message);
//       }
//     }

//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <div className="py-5 px-6 h-screen flex flex-col justify-between">
//       <div>
//         <img
//           className="w-20 mb-10"
//           src="https://www.svgrepo.com/show/505031/uber-driver.svg"
//           alt=""
//         />

//         <form
//           onSubmit={(e) => {
//             subMitHandler(e);
//           }}
//         >
//           <h3 className="text-lg font-semibold mb-2">What&apos;s your Email</h3>
//           <input
//             required
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
//             type="email"
//             placeholder="email@example.com"
//           />
//           <h3 className="text-lg font-semibold mb-2">Enter Password</h3>
//           <input
//             required
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
//             type="password"
//             placeholder="password"
//           />
//           <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placehold:text-bae">
//             Login
//           </button>
//         </form>
//         <p className="text-center">
//           Join a fleet?{" "}
//           <Link to="/captain-signup" className="text-blue-600">
//               Register as a Captain
//           </Link>
//         </p>
//       </div>
//       <div>
//         <Link
//           to="/login"
//           className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placehold:text-bae"
//         >
//           Sign in as User
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CaptainLogin;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Added state for error messages

  const { setCaptain } = useContext(CaptainDataContext); // Removed unused `captain`
  const navigate = useNavigate();

  const subMitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before making a request

    const captainLog = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}captains/login`, // Fixed URL format
        captainLog,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        setError(error.response.data.error || "Invalid email or password");
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError("Network error. Please check your connection.");
      } else {
        console.error("Error setting up request:", error.message);
        setError("Something went wrong. Please try again.");
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="py-5 px-6 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Captain"
        />

        <form onSubmit={subMitHandler}>
          <h3 className="text-lg font-semibold mb-2">What&apos;s your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-semibold mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Login
          </button>
        </form>

        {/* Error Message Display */}
        {error && <p className="text-red-600 text-center mt-3">{error}</p>}

        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

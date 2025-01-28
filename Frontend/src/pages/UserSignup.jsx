import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext.jsx";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [userData, setUserData] = useState("");

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const subMitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}users/register`,
        newUser,
        config
      );
      if (response.status === 201) {
        const data = response.data;
        // console.log(response.data);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate("/home");
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
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            subMitHandler(e);
          }}
        >
          <h3 className="text-lg font-semibold mb-2">What&apos;s your Name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
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
          <h3 className="text-lg font-semibold mb-2">What&apos;s your Email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-semibold mb-2">Enter Password</h3>
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
            Create Account
          </button>
        </form>
        <p className="text-center">
          All Ready have an Account?{" "}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          deserunt suscipit sapiente aliquam aspernatur, rem asperiores nihil.
          Omnis culpa quaerat facilis voluptas perspiciatis fugiat maiores ea
          veniam quo, adipisci totam.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

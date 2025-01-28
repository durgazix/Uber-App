import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });

  return <div>CaptainLogout</div>;
};

export default CaptainLogout;

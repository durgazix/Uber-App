import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectWraper from "./pages/UserProtectWraper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWraper from "./pages/CaptainProtectWraper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/user-riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWraper>
              <Home />
            </UserProtectWraper>
          }
        />

        <Route
          path="users/logout"
          element={
            <UserProtectWraper>
              <UserLogout />
            </UserProtectWraper>
          }
        />
        <Route
          path="captain-home"
          element={
            <CaptainProtectWraper>
              <CaptainHome />
            </CaptainProtectWraper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

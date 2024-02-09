import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import ResponsiveDrawer from "./components/dashboard/ResponsiveDrawer.jsx";
import DoctorProfile from "./components/dashboard/doctor/doctorProfile.jsx";
import USER1 from "./components/dashboard/user/user1.js";
import UserAppointments from "./components/dashboard/user/userProfile.jsx";

function App() {
  

  

 

  const HomeRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/dashboard" element={<ResponsiveDrawer/>} />
        <Route path="/doctorProfile" element={<DoctorProfile/>}/>
        <Route path="/user1" element={<USER1/>}/>
        <Route path="/userAppointments" element={<UserAppointments/>}/>
      </Routes>
    );
  };

  const renderRoutes = () => {
     return HomeRoutes();
  };

  return (
    <BrowserRouter>
      {renderRoutes()}
      
    </BrowserRouter>
  );
}

export default App;

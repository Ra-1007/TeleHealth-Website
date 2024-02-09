import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import ResponsiveDrawer from "./components/dashboard/ResponsiveDrawer.jsx";
import DoctorProfile from "./components/dashboard/doctor/doctorProfile.jsx";

function App() {
  

  

 

  const HomeRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/dashboard" element={<ResponsiveDrawer/>} />
        <Route path="/doctorProfile" element={<DoctorProfile/>}/>
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

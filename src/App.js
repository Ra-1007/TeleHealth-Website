import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login.jsx";

function App() {
  

  

 

  const HomeRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
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

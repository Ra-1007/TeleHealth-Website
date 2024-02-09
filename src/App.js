
import './App.css';
import ResponsiveDrawer from './components/dashboard/ResponsiveDrawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/login/home';
import Login from './components/login/Login';
import { Router } from '@mui/icons-material';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <ResponsiveDrawer/>
      <Home></Home>
      <Router>
        <Routes>
      <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          </Routes>

      </Router>
    </div>
  );
}

export default App;


import './App.css';
import ResponsiveDrawer from './components/dashboard/ResponsiveDrawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/login/home';
import Login from './components/login/Login';
import { Router } from '@mui/icons-material';

function App() {
  

  return (
    <div className="App">
      <ResponsiveDrawer/>
     
      
    </div>
  );
}

export default App;

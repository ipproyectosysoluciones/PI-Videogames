import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';

import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  const location = useLocation();


  return (
    <div className="App">
      { location.pathname !== '/' }
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/home' element={ <Home/> }/>
      </Routes>
    </div>
  );
}

export default App;

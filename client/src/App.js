import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing, Home, SearchGames, Form } from './views';
import Detail from './components/detail/Detail';
import axios from "axios";
import NavBar from './components/navBar/NavBar';

axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  const location = useLocation();


  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar/> }
        <Routes>
          <Route path='/' element={ <Landing/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/detail/:id' element={ <Detail/> }/>
          <Route path='/form' element={ <Form/> }/>
          <Route path='/name' element={ <SearchGames/> }/>
        </Routes>
    </div>
  );
}

export default App;

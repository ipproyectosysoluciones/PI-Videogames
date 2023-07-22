import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './components/detail/Detail';
import Form from './views/Form/Form';
import SearchGames from './views/SearchGames/SearchGames';
import axios from "axios";
import NavBar from './components/navBar/NavBar';

axios.defaults.baseURL = 'http://localhost:3001';

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

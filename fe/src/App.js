import './App.css';
import Portas from './pages/Portas'
import Bejelentkezo from './pages/Bejelentkezo'
import Admin from './pages/Admin'
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {


  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Bejelentkezo />} />
            <Route path="/portas" element={<Portas />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

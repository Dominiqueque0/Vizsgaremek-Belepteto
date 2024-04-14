import './App.css';
import Portas from './pages/Portas'
import Bejelentkezo from './pages/Bejelentkezo'
import Admin from './pages/Admin'
import PrevData from './pages/PrevData'
import React from 'react';
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
            <Route path="/savedtables" element={<PrevData />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

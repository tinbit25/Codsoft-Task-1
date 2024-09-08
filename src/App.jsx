import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Picture from './components/Picture';
import Home from './components/Home';
import Tributes from './components/Tributes';
import Services from './components/Services';
import Life from './components/Life'
import Places from './components/Places'
import Photos from './components/photos'
import Organization from './components/Organization'

import Footer from './components/Footer';
import './App.css'; 
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Picture />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tributes" element={<Tributes />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Life" element={<Life />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Organization" element={<Organization />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;

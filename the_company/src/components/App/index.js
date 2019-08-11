import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Home from '../Home';
import Services from '../Services';
import instagram from './instagram-brands.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
        <Services path="/services" />
      </Router> 
      <Footer> 
        <p>Adress: Karis Lycka 6 433 51 Öjersjö</p>
        <p>Telefon: 031-7619101</p>
         <p>Email: info@byggvolt.se</p>
         <img src={instagram} alt="instagram-brands-logo" />
       </Footer>
    </div>
  );
}

export default App;

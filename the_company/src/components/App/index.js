import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Footer from '../Footer';
import Home from '../Home';
import Navbar from '../Navbar';
import instagram from './instagram-brands.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home path="/" />
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

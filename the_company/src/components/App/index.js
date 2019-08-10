import React from 'react';
import './App.css';
import Footer from '../Footer';
import Home from '../Home';
import instagram from './instagram-brands.svg';

function App() {
  return (
    <div className="App">
      <Home />  
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

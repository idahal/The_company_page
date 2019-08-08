import React from 'react';
import './App.css';
import Footer from '../Footer';
import Hero from '../Hero';
import About from '../About';
import Box from '../Box';


import instagram from './instagram-brands.svg';

function App() {
  return (
    <div className="App">
        <Hero />
        <About />
        <Box>
        <p>Trygghet är viktigt.</p>
        <h1>Anlita oss</h1>
        <h3>
          Att anlita oss ska ge dig som kund en positiv upplevelse inte bara i själva utförandet utan också i den rent personliga kontakten.
          Vi hoppas att vår positiva inställning ska ge dig som kund ett mervärde även i din egen vardag. 
        </h3>
          
        </Box>
 
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

import React from 'react';
import Hero from '../Hero';
import Box from '../Box';

function Home() {
  return (
    <div className="Home">
        <Hero />
        <Box>
        <p>Bygg eller el, vi kan båda.</p>
          <h1>Om oss</h1>
          <h3> 
            Vi är ett El/Byggtekniskt företag med medarbetare som har hög teknisk kompetens och mångårig erfarenhet.
            Vårt personliga engagemang samt närheten till kunden är vår styrka och är en av de grundpelarna som vårt företag bygger på.
          </h3>
        </Box>
 
        <Box>
          <p>Trygghet är viktigt.</p>
          <h1>Anlita oss</h1>
          <h3>
            Att anlita oss ska ge dig som kund en positiv upplevelse inte bara i själva utförandet utan också i den rent personliga kontakten.
            Vi hoppas att vår positiva inställning ska ge dig som kund ett mervärde även i din egen vardag. 
          </h3>
        </Box>
     </div>
  );
}

export default Home;

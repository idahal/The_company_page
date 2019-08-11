import React from 'react';
import styled from "styled-components";
import Box from '../Box';

const StyledServices = styled.div`
    .closeImage {
        width: 100%;
    }
    
@media screen and (max-width: 800px) {

 }
`;

function Services() {
  return (
    <div className="Services">  
        <Box>
        <p>Vad vi gör</p>
          <h1>Våra tjänster</h1>
          <h3> 
            Våra arbetsområden är framförallt: El, Kyl-el, Styr o Regler, Bygg, Data/Nätverk inom alla miljöer som har behov av hög teknisk kompetens.
            Allt vi utför görs med högsta noggrannhet. Självklart innehar vi el behörighet AB/L.Vi har även mångårig erfarenhet av projektledning inom våra arbetsområden och kan därför även erbjuda er denna tjänst.
          </h3>
        </Box>
     </div>
  );
}

export default Services;

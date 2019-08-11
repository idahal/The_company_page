import React from 'react';
import styled from "styled-components";
import Box from '../Box';
import bolt from './bolt-solid.svg';
import tools from './tools-solid.svg';
import worker from '../../../src/images/worker.PNG';
import car from '../../../src/images/car.PNG';


const StyledServices = styled.div`
    height: 300px;
    background-color: black;
    margin-bottom: 1%;
    .workerImage, .carImage {
        height: 300px;
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
        <StyledServices>
            <img src={bolt} alt="bolt" />
            <img src={worker} className="workerImage" alt="image on a worker" />
            <img src={tools} alt="tools" />
            <img src={car} className="carImage" alt="image on a Byggvolr car" />
        </StyledServices>

     </div>
  );
}

export default Services;

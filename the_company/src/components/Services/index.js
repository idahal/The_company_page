import React from 'react';
import styled from "styled-components";
import Box from '../Box';
import bolt from './bolt-solid.svg';
import tools from './tools-solid.svg';
import worker from '../../../src/images/worker.PNG';
import car from '../../../src/images/car.PNG';


const StyledServices = styled.div`
    width: 100%;
    margin-bottom: 1em;
    background-color: rgb(255, 255, 255);
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    
    .workerImage, .carImage {
        width: 25%;
        height: 300px;
    }

    
@media screen and (max-width: 800px) {
    .workerImage, .carImage {
        width: 100%;        
    }
    
    .workerImage {
        margin-bottom: 1em;        
    }
 }
`;

const StyledSvg = styled.div`
    width: 25%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
}
    
@media screen and (max-width: 800px) {
    width: 100%;
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
            <StyledSvg>
                <img src={bolt} alt="bolt" />                
            </StyledSvg>
            <img src={worker} className="workerImage" alt="a worker" />
            <StyledSvg>
                <img src={tools} alt="tools" />
            </StyledSvg>
            <img src={car} className="carImage" alt="a Byggvolt car" />
        </StyledServices>
     </div>
  );
}

export default Services;

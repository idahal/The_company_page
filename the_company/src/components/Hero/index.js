import React from 'react';
import styled from "styled-components";
import hero_image from '../../../src/images/hero_image.PNG';

const StyledHero = styled.div`
    position: relative;
    text-align: center;
    .heroImage {
        width: 100%;
    }
    
    h1 {
        font-size: 35px;
        position: absolute;
        bottom: 2%;
        left: 2%;
        color: rgb(255, 255, 255);
        font-weight: lighter;
        width: 60%;
        text-align: left;
        padding: 1%;
        background-color: rgb(255, 194, 102, 0.8);
    }

@media screen and (max-width: 800px) {
    .heroImage {
        height: 140px;
    }

    h1 {
        position: absolute;
        width: 80%;
        font-size: 1.2em;
    }
 }
`;

const Hero = () => {
    return (
      <StyledHero>
          <img src={hero_image} className="heroImage" alt="hero_image" />
          <h1>-ByggVolt, vi har hög teknisk kompetens och mångårig erfarenhet.</h1>
      </StyledHero>
    )
  }



export default Hero;
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
        position: absolute;
        bottom: 8px;
        left: 16px;
        color: rgb(255, 255, 255);
        font-weight: lighter;
        width: 60%;
        text-align: left;
        margin-left: 5%;
        padding: 1%;
        background-color: rgb(255, 194, 102, 0.8);
    }

@media screen and (max-width: 800px) {
    h1 {
        position: absolute;
        bottom: 1px;
        left: 1px;
        font-size: 0.8rem;
    }
 }
`;

const Hero = () => {
    return (
      <StyledHero>
        <hero>
          <img src={hero_image} className="heroImage" alt="hero_image" />
        </hero>
        <h1>-ByggVolt, vi har hög teknisk kompetens och mångårig erfarenhet.</h1>
      </StyledHero>
    )
  }



export default Hero;
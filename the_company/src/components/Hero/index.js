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
        color: #ffffff;
        font-weight: lighter;
    }

@media screen and (max-width: 800px) {
    h1 {
        position: absolute;
        bottom: 1px;
        left: 1px;
        font-size: 0.8rem;
        width: 60%;

    }

 }
`;

const Hero = () => {
    return (
      <StyledHero>
        <hero>
          <img src={hero_image} className="heroImage" alt="hero_image" />
        </hero>
        <h1>- ByggVolt, hög teknisk kompetens och mångårig erfarenhet.</h1>
      </StyledHero>
    )
  }



export default Hero;
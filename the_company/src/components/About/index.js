import React from 'react';
import styled from "styled-components";

const StyledAbout = styled.div`
    width: 100%;
    background-color: rgb(255, 194, 102); 

    h3 {
        color: rgb(255, 255, 255);
        font-weight: lighter;
        width: 60%;
        text-align: left;
        padding: 1%;
    }

@media screen and (max-width: 800px) {
    h3 {
        font-size: 0.8rem;
    }
 }
`;

const About = () => {
    return (
      <StyledAbout>
          <p>Bygg eller el, vi kan båda.</p>
          <h3> Vi är ett El/Byggtekniskt företag med medarbetare som har hög teknisk kompetens och mångårig erfarenhet.
              Vårt personliga engagemang samt närheten till kunden är vår styrka och är en av de grundpelarna som vårt företag bygger på.</h3>
      </StyledAbout>
    )
  }

export default About;
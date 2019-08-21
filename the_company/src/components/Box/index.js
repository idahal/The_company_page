import React from 'react';
import styled from "styled-components";

const StyledBox = styled.div`
    width: 100%;
    background-color: rgb(230, 138, 0); 
    color: rgb(255, 255, 255);
    padding: 1em;
    margin: 1em 0 1em 0;
    height: 300px;
    
    h1 {
        font-size: 35px;
        text-transform: uppercase;
    }

    h3 {
        width: 80%;
        font-size: 1.2rem;
        text-align: left;
        font-size: 20px;
        letter-spacing: 1px;
    }

    p {
        text-transform: uppercase;
        font-size: 15px;
    }

    .center {
        text-align: center;
        width: 100%;
    }

@media screen and (max-width: 800px) {
    height: 335px;
    margin: 1em 0 1em 0;
    
    h3 {
        width: 100%;
        font-size: 0.9em;
    }
 `;

const Box = props => {
    return (
      <StyledBox>
           {props.children}
      </StyledBox>
    )
  }

export default Box;
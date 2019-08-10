import React from 'react';
import styled from "styled-components";

const StyledBox = styled.div`
    width: 100%;
    background-color: rgb(230, 138, 0); 
    color: rgb(255, 255, 255);
    padding: 1%;
    margin: 1% 0 1% 0;
    height: 300px;
    h1 {
        font-size: 2rem;
        text-transform: uppercase;
    }

    h3 {
        width: 80%;
        font-size: 1.2rem;
        text-align: left;
    }
    p {
        text-transform: uppercase;
    }

@media screen and (max-width: 800px) {
    height: 270px;
    padding: 1% 5% 1% 5%;

    h1 {

    }
    h3 {
        width: 100%;
        font-size: 0.9rem;

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
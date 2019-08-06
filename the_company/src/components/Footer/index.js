import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  width: 100%;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  p {
    font-size: 14px;
    align-self: flex-end;
  }
@media screen and (max-width: 800px) {
  }
`;

const Footer = () => (
  <StyledFooter>
      <p>Adress:</p>
      <p>Telefon:</p>
      <p>Följ oss på</p>
      <p>Copyright Ida Hallner {(new Date().getFullYear())}</p>
  </StyledFooter>
)


export default Footer;
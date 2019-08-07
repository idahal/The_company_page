import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #e68a00;
  width: 100%;
  color: #000000;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    font-size: 14px;
    align-self: flex-end;
  }
@media screen and (max-width: 800px) {
    flex-direction: column;
    p {
        align-self: center;
    }

}
`;

const Footer = props => (
<StyledFooter>
    {props.children}
  </StyledFooter>
)


export default Footer;
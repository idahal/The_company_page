import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e68a00;
  width: 100%;
  color: #ffffff;
    p {
        font-size: 14px;
        align-self: center;
    }
    img {
        padding-top: 2%;
    }
@media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
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
import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgb(0, 0, 0);
    width: 100%;
    color: rgb(255, 255, 255);
    
    p {
        font-size: 14px;
        align-self: center;
    }
    
    img {
        padding-top: 1.5em;
    }

@media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    img {
        padding: 1em 0 0 2em;
    }

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
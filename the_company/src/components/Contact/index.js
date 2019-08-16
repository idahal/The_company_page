import React, { Component } from 'react';
import styled from "styled-components";
import Box from '../Box';
import ListOfEmployees from "../ListOfEmployees";
import employees from '../../../src/data/employees.js';;



const StyledContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgb(255, 255, 255);
    width: 100%;

@media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
}
`;

class Contact extends Component {
    render(){
        return (
            <div className="Projects">
                <Box>
                    <p>Ring oss gärna</p>
                    <h1>Adressuppgifter</h1>
                    <h3 className="center">Karis Lycka 6 433 51 Öjersjö</h3>
                    <h3 className="center">031-7619101</h3>
                    <h3 className="center">info@byggvolt.se</h3>
                </Box>
            <StyledContact>
                {employees.map((e, key) => (
                <ListOfEmployees
                    key={key}
                    image={e.image}
                    description={e.description}              
                 />
                ))}
            </StyledContact>
        </div>
    )}
}

export default Contact;

import React from 'react';
import styled from "styled-components";
import Box from '../Box';



const StyledContact = styled.div`
    
    
@media screen and (max-width: 800px) {
  
 }
`;

function Contact() {
  return (
    <div className="Contact">  
        <Box>
           <p>Ring oss gärna</p>
           <h1>Kontaktuppgifter</h1>
           <h3>Adress: Karis Lycka 6 433 51 Öjersjö</h3>
           <h3>Telefon: 031-7619101</h3>
           <h3>Telefon: 031-7619101</h3>
           <h3>Email: info@byggvolt.se</h3>
        </Box>
        <StyledContact>

        </StyledContact>

     </div>
  );
}

export default Contact;

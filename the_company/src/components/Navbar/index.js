import React  from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import logo from './logo.PNG';



const StyledNavbar = styled.div`
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0);
    font-size: 1.3rem;
    ul {
        display: flex;
    }
    a {
        color: rgb(255, 255, 255);
        text-decoration: none;
        display: block;
        padding: 1em;
    }
    a:hover {
        color: rgb(230, 138, 0);
    }

    
    .companyLogo {
      height: 70%;
      margin: 0 0 0 2%;
    }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src={logo} className="companyLogo" alt="logo" />
      <ul> 
      <Link to="/">Hem</Link>
      <Link to="/services">Tjänster</Link>
      <Link to="/contact">Kontakt</Link>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
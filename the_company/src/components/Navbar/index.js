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
    nav {
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

    .active {
        color: rgb(230, 138, 0);
    }

    @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
            className: isCurrent ? "active" : "notactive"
        };
      }}
    />
  );

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src={logo} className="companyLogo" alt="logo" />
      <nav> 
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/services">Tjänster</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar
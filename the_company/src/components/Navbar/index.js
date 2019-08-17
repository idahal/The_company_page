import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "@reach/router";
import logo from '../../../src/images/logo.PNG';
import hamburger from './bars-solid.svg';

   

const StyledNavbar = styled.div`
@media screen and (min-width: 800px) {    
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0);
    font-size: 1.3rem;

    .menu, button {
        display: none;
    }

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
        font-weight: bold;
    }
}

    
    @media screen and (max-width: 800px) {
        height: 10vh;
        background: rgb(0, 0, 0);

        .active {            
            font-weight: bold;
            text-decoration: underline;
        }

        button {
            background: none;
            border: none;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 2;
        }

        
        .menu {
            width: 100vw;
            height: 50vh;
            background: rgba(230, 138, 0, 0.74);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 2;
            top: 1vh;
        }

        a {
            color: rgb(255, 255, 255);
            text-decoration: none;
            font-size: 2em;
            padding-bottom: 10px;
        }

        .companyLogo {
            height: 70%;
            margin: 2% 0 0 0;
        }

        nav {
            display: none;
        }
    }
`;

/* Create a active class to highlight choosen page */
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

  /* Create a dropdown to mobile */
  class Navbar extends Component {
    constructor() {
      super();
  
      this.state = {
        showMenu: false,
      };
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
  
    showMenu(event) {
      event.preventDefault();
  /* Show dropdown menu on click */
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
   /* Close dropdown menu on click */
     closeMenu() {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  
    render() {
        return (
        <StyledNavbar>
            <img src={logo} className="companyLogo" alt="logo" />
            <button onClick={this.showMenu}>
                <img src={hamburger} alt="hamburger" />
            </button>
        {
          this.state.showMenu ? (
              <div className="menu">
                    <NavLink to="/">Hem</NavLink>
                    <NavLink to="/service">Tjänster</NavLink>
                    <NavLink to="/kontakt">Kontakt</NavLink>
               </div>
          ) : (null)
        }
{/* Show nav when window over 800px*/}
            <nav>
                <NavLink to="/">Hem</NavLink>
                <NavLink to="/service">Tjänster</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
            </nav>  
        </StyledNavbar>
        );
    }
}

export default Navbar
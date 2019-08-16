import React, { Component } from 'react';
import styled from "styled-components";


const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 27%;
 
    img {
        width: 100%;
    }

    p {
        margin-top: 1%;
    }

@media screen and (max-width: 800px) {
    width: 80%;
    margin-bottom: 2%;   
  }
`;

class ListOfEmployees extends Component {
    render() {
      return (
        <StyledItem>
          <div>
            <img src={this.props.image} alt="employees_photo"/>
            <p>{this.props.description}</p>
          </div>
        </StyledItem>
    )
  }
}

export default ListOfEmployees;
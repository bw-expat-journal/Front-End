import React from 'react';
import styled from 'styled-components';
import TabNav from './TabNav';

const StyledHeader = styled.header`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  background: #1F4852;
  color: white;
  // width: 100%;
  
  img {
    width: 25%;
    margin-left: 8%;
    margin: 2%;
  }
  display: flex;
  justify-content: space-between;

  div {
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: white;
      text-decoration: none;
      padding: 1rem;
      text-transform: uppercase;
      font-family: 'Raleway', sans-serif;
      font-size: 1.9rem;
    }
  }
`

export default function Header() {
  return <StyledHeader className="ui centered">
          <img src= './logo.png'alt = 'logo'/>
          <TabNav />
  </StyledHeader>
}
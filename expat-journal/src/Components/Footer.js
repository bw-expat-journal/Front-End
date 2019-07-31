import React from 'react';
import styled from 'styled-components';
import TabNav from './TabNav';

const StyledFooter = styled.footer`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  background: #1F4852;
  color: white;
  display: flex;
  align-items: center;
   p {
      margin-left: 5rem;
      color: white;
      padding: 1rem;
      font-family: 'Raleway', sans-serif;
      font-size: 1.5rem;
    }
  }
`

export default function Header() {
  return <StyledFooter className="ui centered">
          <p>Copyright - Expat Journal 2019</p>
         </StyledFooter>
}
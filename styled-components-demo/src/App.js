import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import logo from './logo.svg';


const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  ${props => {
    const theme = props.theme;
    return css`
      background-color: ${theme.night.background};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: ${theme.night.color};
    `;

  }}
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoStyled = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotateAnimation} infinite 20s linear;
`;

const LinkStyled = styled.a.attrs({
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: #61dafb;
`;

const ButtonStyled = styled.button`
  width: 200px;
  height: 100px;
  margin: 20px; 0;
  font-size: 15px;
`;

const ButtonSubscribe = styled(ButtonStyled)`
  background-color: tomato;
  font-size: 25px;
  color: white;
`;

const ButtonDynamic = styled(ButtonStyled)`
  ${props => {
    const color = props.color || 'white';
    return css`
      background-color: ${color}
    `;
  }}
`;

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <LogoStyled />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkStyled>
          Learn React
        </LinkStyled>

        <ButtonStyled>Default</ButtonStyled>
        <ButtonSubscribe>Subscribe</ButtonSubscribe>
        <ButtonDynamic color="green">Dynamic Button</ButtonDynamic>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;

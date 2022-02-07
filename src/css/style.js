import 'react-toastify/dist/ReactToastify.css'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
  }
`

export {
  StyledLink,
  GlobalStyle
}
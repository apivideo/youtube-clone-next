import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
*:focus {
  outline: none;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; /*  10px/16px = 62.5% -> 1rem = 10px */
} 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    }
  a {
  text-decoration: none;
  color: inherit;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

import * as React from 'react';
import { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    transform: translateX(-100%);
  }
  40%, 100% {
    transform: translateX(100%);
  }
`;

export const GlobalStyle = createGlobalStyle`
  *::selection{
    background-color: ${({ theme }): string => theme.t};
    color: ${({ theme }): string => theme.sb};
  }
  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body{
    padding: 0;
    margin: 0;
    background-color: ${({ theme }): string => theme.sb};
    transition: background-color 0.2s linear;
    color: ${({ theme }): string => theme.t};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  #root {
    max-width: 1920px;
    margin: 0 auto;

    @media (min-width: 1921px) {
      margin-top: 25px;
    }
  }

  *, a, p, div, li, h1, h2, h3, h4, h5, h6, header, footer {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }): string => theme.t};
    transition: background-color 0.2s linear;
    transition: box-shadow 0.125s linear;
    margin: 0;
    padding: 0;
  }

  input {
    margin: 0;
    padding: 10px 15px;
    border: 1px;
    border-color: ${({ theme }): string => theme.pb};
    border-radius: 5px;
    color: ${({ theme }): string => theme.t};
    background-color: ${({ theme }): string => theme.pb};

    &:focus {
      border-color: ${({ theme }): string => theme.s}};
    }
  }

  button{
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* tooltip style enhancements */
  .rc-tooltip-inner {min-height: 18px;}

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }): string => theme.pb};
    border-radius: 10px;
    box-shadow: inset 0 0 5px ${({ theme }): string => theme.sb};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }): string => theme.p};
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover{
    background-color: green;
  }

  a, button{
    cursor: pointer;
    text-decoration: none;
    background-position: -100px;
    &:active, &:focus{
      outline: 0;
      outline-style: none;
      -moz-outline-style: none;
    }
  }

  .placeholder {
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    background-color: ${({ theme }): string => theme.placeholder};
    &::before {
      content: '';
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient( 90deg, ${({ theme }): string => theme.placeholderHighlight}d3 0, ${({ theme }): string => theme.placeholderHighlight}4d 20%, ${({ theme }): string => theme.placeholderHighlight}66 60%, ${({ theme }): string => theme.placeholderHighlight}d3);
      animation: ${skeletonLoading} 2.5s infinite ease-in-out;
    }
  }

  /* c3 chart */
  .c3-chart-arc text {
    fill: ${({ theme }): string => theme.t};
  }
  .c3-legend-item text{
    fill: ${({ theme }): string => theme.t};
    font-size: 80%;
  }

  /* tick */
  .domain {
    display: none;
  }
  .tick {
    fill: ${({ theme }): string => theme.t};
    font-weight: lighter;
  }

  /* c3 styles */
  .c3-lines-banned {
    fill: ${({ theme }): string => theme.p}20;
  }
  .c3-circle {
    fill: ${({ theme }): string => theme.p};
  }

`;

// Cosmos export

export type Props = {
  children: React.ReactNode;
}
export const StorybookGlobalStyle: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);

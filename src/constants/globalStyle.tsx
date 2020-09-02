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

const tooltipShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const GlobalStyle = createGlobalStyle`
  *::selection {
    background-color: ${({ theme }): string => theme.t};
    color: ${({ theme }): string => theme.sb};
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
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
    overflow-x: hidden;
  }

  *, a, p, div, li, h1, h2, h3, h4, h5, h6, header, footer {
    font-family: 'Poppins', sans-serif;
    font-weight: 400; /* Default size */
    color: ${({ theme }): string => theme.t};
    transition: background-color 0.2s linear;
    transition: box-shadow 0.125s linear;
    margin: 0;
    user-select: none;
    padding: 0;
    box-sizing: border-box; /* padding is included in percentages e.g. width: 100% + padding 10 will remain width 100% instead of 100%+10px */
  }

  strong {
    font-weight: 800;
  }

  form {
    width: 100%;
  }

 a.highlight {
    color: ${({ theme }): string => theme.p};
    text-decoration-line: underline;
    text-decoration-color: ${({ theme }): string => theme.p};
    font-weight: 500;

    &:hover {
    color: ${({ theme }): string => theme.s};
    text-decoration-color: ${({ theme }): string => theme.s};
    }
  }

  label {
    font-size: 0.9rem;
  }

  input {
    margin: 0;
    padding: 10px 15px;
    border-width: 2px;
    border-radius: 5px;
    border-color: transparent;
    color: ${({ theme }): string => theme.t};
    outline: 0;

    &:focus {
      border-color: ${({ theme }): string => theme.p};
    }

    &[readOnly]{
      cursor: not-allowed;
      &:focus {
        border-color: none!important;
      }
    }
  }

  button {
    font-weight: 700;
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
  }

  ul {
    list-style-position: inside;
    margin: 10px 0;
  }

  /* custom scrollbar */
  ::-webkit-scrollbar {width: 10px;}
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }): string => theme.pb};
    border-radius: 10px;
    box-shadow: inset 0 0 5px ${({ theme }): string => theme.sb};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }): string => theme.p};
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out;
    &:hover{
    background-color: ${({ theme }): string => theme.p}fa;
    }
  }

  a, button {
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

  .rc-tooltip {
    opacity: 0;
    animation: ${tooltipShow} .15s linear forwards;
    max-width: 500px;
  }

  .rc-tooltip-hidden {
    display: none;
    opacity: 0;
  }

  .rc-tooltip-inner {
    background-color: ${({ theme }): string => theme.p};
    min-height: 18px;
    hyphens: auto;
    overflow-wrap: break-word
  }

  /* styling for the bantr user badge <BantrUser/> */
  .bantr-user-tooltip {
    .rc-tooltip-inner {
      background-color: ${({ theme }): string => theme.s};
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .mui-snackbar {
    color: white;
  }

  /* Styling sfor <InfoTooltip/> */
  .info-tooltip {
    font-size: 1.125rem;
  }

  .rc-tooltip-arrow { display: none; }

  /* FIX: Native firefox scrollbar shows on top of simplebar scrollbar. So if in simplebar container, hide the native scrollbar. */
  .simplebar-content-wrapper {
  /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /*overflow: hidden!important;*/
  }

  /* Fixes styling issues with the graphql playground */
  .playground {
    a, p, div, li, h1, h2, h3, h4, h5, h6 {
      color: inherit;
    }
  }

  .MuiSnackbarContent-root {
    background-color: ${({ theme }): string => theme.p};
    color: ${({ theme }) => theme.t};
  }

  div[class^="SnackbarItem-variantSuccess-"], div[class*="SnackbarItem-variantSuccess-"] {
    background-color: ${({ theme }): string => theme.p}!important;
    color: white;
  }

  div[class^="SnackbarItem-variantError-"], div[class*="SnackbarItem-variantError-"] {
    background-color: ${({ theme }): string => theme.error}!important;
    color: white;
  }

  div[class^="SnackbarItem-variantInfo-"], div[class*="SnackbarItem-variantInfo-"] {
    background-color: ${({ theme }): string => theme.p}!important;
    color: white;
  }

/* Add custom styling to the snackbar variants (types: default, info, success, error */
  span#client-snackbar {
    color: white!important;
  }

`;

export type Props = {
  children: React.ReactNode;
}
export const StorybookGlobalStyle: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);

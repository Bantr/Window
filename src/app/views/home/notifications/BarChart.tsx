import * as React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  polygon {
    fill: ${({ theme }): string => theme.p};

    &:hover {
      fill: ${({ theme }): string => theme.s};
    }
  }
  .cls-50 {
  fill: ${({ theme }) => theme.t};
  }
`;

export const BarChart: React.FC = () => (
  <Svg viewBox="0 0 121.68 98.69">
    <defs>
      <mask height="92.33" id="mask" maskUnits="userSpaceOnUse" width="121.8" x="-0.12" y="6.44" >
        <path d="M-.12,88.8c0-8.18,5.65-16.25,12.31-19.64,9.85-5,11.84,1.53,18.24-1.63,9-4.43,10.43-19.62,18.06-23.5,8.18-4.16,8.89,9.87,19.89,4.27,4.88-2.49,5.37-5.85,12.46-9.46,6.23-3.17,8.11-.43,12.63-2.73,6.8-3.44,7.64-11.21,17.2-16.08,5.75-2.93,11,.36,11,6.74v10L-.12,98.77Z" fill="white" />
      </mask>
      <linearGradient gradientTransform="matrix(1.15, -0.5, 0, 0.87, 14.6, -117.72)" gradientUnits="userSpaceOnUse" id="linear-gradient" x1="-12.01" x2="-12.01" y1="242.59" y2="207.5" />
      <linearGradient id="linear-gradient-2" x1="-9.75" x2="-9.75" y1="242.36" y2="207.27" />
      <linearGradient id="linear-gradient-3" x1="-7.49" x2="-7.49" y1="242.13" y2="207.04" />
      <linearGradient id="linear-gradient-4" x1="-5.22" x2="-5.22" y1="241.9" y2="206.81" />
      <linearGradient id="linear-gradient-5" x1="-2.96" x2="-2.96" y1="241.67" y2="206.58" />
      <linearGradient id="linear-gradient-6" x1="-0.7" x2="-0.7" y1="241.44" y2="206.35" />
      <linearGradient id="linear-gradient-7" x1="1.57" x2="1.57" y1="241.21" y2="206.12" />
      <linearGradient id="linear-gradient-8" x1="3.83" x2="3.83" y1="240.98" y2="205.89" />
      <linearGradient id="linear-gradient-9" x1="6.09" x2="6.09" y1="240.75" y2="205.66" />
      <linearGradient id="linear-gradient-10" x1="8.36" x2="8.36" y1="240.52" y2="205.43" />
      <linearGradient id="linear-gradient-11" x1="10.62" x2="10.62" y1="240.29" y2="205.2" />
      <linearGradient id="linear-gradient-12" x1="12.88" x2="12.88" y1="240.06" y2="204.97" />
      <linearGradient id="linear-gradient-13" x1="15.15" x2="15.15" y1="239.83" y2="204.74" />
      <linearGradient id="linear-gradient-14" x1="17.41" x2="17.41" y1="239.6" y2="204.51" />
      <linearGradient id="linear-gradient-15" x1="19.67" x2="19.67" y1="239.37" y2="204.28" />
      <linearGradient id="linear-gradient-16" x1="21.94" x2="21.94" y1="239.14" y2="204.05" />
      <linearGradient id="linear-gradient-17" x1="24.20" x2="24.20" y1="238.91" y2="203.82" />
      <linearGradient id="linear-gradient-18" x1="26.46" x2="26.46" y1="238.68" y2="203.59" />
      <linearGradient id="linear-gradient-19" x1="28.73" x2="28.73" y1="238.45" y2="203.36" />
      <linearGradient id="linear-gradient-20" x1="30.99" x2="30.99" y1="238.22" y2="203.13" />
      <linearGradient id="linear-gradient-21" x1="33.26" x2="33.26" y1="237.99" y2="202.9" />
      <linearGradient id="linear-gradient-22" x1="35.52" x2="35.52" y1="237.76" y2="202.67" />
      <linearGradient id="linear-gradient-23" x1="37.78" x2="37.78" y1="237.53" y2="202.44" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-24" x1="-359.82" x2="-359.82" y1="232.01" y2="196.91" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-25" x1="-357.55" x2="-357.55" y1="232.24" y2="197.14" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-26" x1="-355.29" x2="-355.29" y1="232.47" y2="197.37" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-27" x1="-353.03" x2="-353.03" y1="232.7" y2="197.6" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-28" x1="-350.76" x2="-350.76" y1="232.93" y2="197.83" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-29" x1="-348.5" x2="-348.5" y1="233.16" y2="198.06" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-30" x1="-346.24" x2="-346.24" y1="233.39" y2="198.29" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-31" x1="-343.97" x2="-343.97" y1="233.62" y2="198.52" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-32" x1="-341.71" x2="-341.71" y1="233.85" y2="198.75" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-33" x1="-339.45" x2="-339.45" y1="234.08" y2="198.98" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-34" x1="-337.18" x2="-337.18" y1="234.31" y2="199.21" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-35" x1="-334.92" x2="-334.92" y1="234.54" y2="199.44" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-36" x1="-332.66" x2="-332.66" y1="234.77" y2="199.67" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-37" x1="-330.39" x2="-330.39" y1="235" y2="199.9" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-38" x1="-328.13" x2="-328.13" y1="235.23" y2="200.13" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-39" x1="-325.87" x2="-325.87" y1="235.46" y2="200.36" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-40" x1="-323.6" x2="-323.6" y1="235.69" y2="200.59" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-41" x1="-321.34" x2="-321.34" y1="235.92" y2="200.82" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-42" x1="-319.08" x2="-319.08" y1="236.15" y2="201.05" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-43" x1="-316.81" x2="-316.81" y1="236.38" y2="201.28" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-44" x1="-314.55" x2="-314.55" y1="236.61" y2="201.51" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-45" x1="-312.28" x2="-312.28" y1="236.84" y2="201.74" />
      <linearGradient gradientTransform="matrix(-1.15, 0.5, 0, 0.87, -294.53, 16.14)" id="linear-gradient-46" x1="-310.02" x2="-310.02" y1="237.07" y2="201.97" />
      <linearGradient id="linear-gradient-47" x1="40.05" x2="40.05" y1="237.3" y2="202.21" />
    </defs>
    <g data-name="Layer 2" id="Layer_2" >
      <g data-name="Layer 1" id="Layer_1-2" >
        <g mask="url(#mask)">
          <polygon fill="url(#linear-gradient)" points="1.45 67.67 0 68.41 0 98.69 1.45 97.95 1.45 67.67" />
          <polygon fill="url(#linear-gradient-2)" points="4.07 66.34 2.61 67.08 2.61 97.36 4.07 96.62 4.07 66.34" />
          <polygon fill="url(#linear-gradient-3)" points="6.68 65 5.23 65.74 5.23 96.03 6.68 95.29 6.68 65" />
          <polygon fill="url(#linear-gradient-4)" points="9.29 63.67 7.84 64.41 7.84 94.69 9.29 93.95 9.29 63.67" />
          <polygon fill="url(#linear-gradient-5)" points="11.91 62.34 10.46 63.08 10.46 93.36 11.91 92.62 11.91 62.34" />
          <polygon fill="url(#linear-gradient-6)" points="14.52 61.01 13.07 61.75 13.07 92.03 14.52 91.29 14.52 61.01" />
          <polygon fill="url(#linear-gradient-7)" points="17.13 59.68 15.68 60.42 15.68 90.7 17.13 89.96 17.13 59.68" />
          <polygon fill="url(#linear-gradient-8)" points="19.75 58.35 18.3 59.09 18.3 89.37 19.75 88.63 19.75 58.35" />
          <polygon fill="url(#linear-gradient-9)" points="22.36 57.02 20.91 57.76 20.91 88.04 22.36 87.3 22.36 57.02" />
          <polygon fill="url(#linear-gradient-10)" points="24.98 55.69 23.52 56.43 23.52 86.71 24.98 85.97 24.98 55.69" />
          <polygon fill="url(#linear-gradient-11)" points="27.59 54.36 26.14 55.1 26.14 85.38 27.59 84.64 27.59 54.36" />
          <polygon fill="url(#linear-gradient-12)" points="30.2 53.03 28.75 53.77 28.75 84.05 30.2 83.31 30.2 53.03" />
          <polygon fill="url(#linear-gradient-13)" points="32.82 51.7 31.36 52.44 31.36 82.72 32.82 81.98 32.82 51.7" />
          <polygon fill="url(#linear-gradient-14)" points="35.43 50.36 33.98 51.1 33.98 81.39 35.43 80.65 35.43 50.36" />
          <polygon fill="url(#linear-gradient-15)" points="38.04 49.03 36.59 49.77 36.59 80.05 38.04 79.31 38.04 49.03" />
          <polygon fill="url(#linear-gradient-16)" points="40.66 47.7 39.2 48.44 39.2 78.72 40.66 77.98 40.66 47.7" />
          <polygon fill="url(#linear-gradient-17)" points="43.27 46.37 41.82 47.11 41.82 77.39 43.27 76.65 43.27 46.37" />
          <polygon fill="url(#linear-gradient-18)" points="45.88 45.04 44.43 45.78 44.43 76.06 45.88 75.32 45.88 45.04" />
          <polygon fill="url(#linear-gradient-19)" points="48.5 43.71 47.05 44.45 47.05 74.73 48.5 73.99 48.5 43.71" />
          <polygon fill="url(#linear-gradient-20)" points="51.11 42.38 49.66 43.12 49.66 73.4 51.11 72.66 51.11 42.38" />
          <polygon fill="url(#linear-gradient-21)" points="53.73 41.05 52.27 41.79 52.27 72.07 53.73 71.33 53.73 41.05" />
          <polygon fill="url(#linear-gradient-22)" points="56.34 39.72 54.89 40.46 54.89 70.74 56.34 70 56.34 39.72" />
          <polygon fill="url(#linear-gradient-23)" points="58.95 38.39 57.5 39.13 57.5 69.41 58.95 68.67 58.95 38.39" />
          <polygon fill="url(#linear-gradient-24)" points="120.23 7.18 121.68 6.44 121.68 36.72 120.23 37.46 120.23 7.18" />
          <polygon fill="url(#linear-gradient-25)" points="117.61 8.51 119.07 7.77 119.07 38.05 117.61 38.8 117.61 8.51" />
          <polygon fill="url(#linear-gradient-26)" points="115 9.84 116.45 9.11 116.45 39.39 115 40.13 115 9.84" />
          <polygon fill="url(#linear-gradient-27)" points="112.39 11.18 113.84 10.44 113.84 40.72 112.39 41.46 112.39 11.18" />
          <polygon fill="url(#linear-gradient-28)" points="109.77 12.51 111.23 11.77 111.23 42.05 109.77 42.79 109.77 12.51" />
          <polygon fill="url(#linear-gradient-29)" points="107.16 13.84 108.61 13.1 108.61 43.38 107.16 44.12 107.16 13.84" />
          <polygon fill="url(#linear-gradient-30)" points="104.55 15.17 106 14.43 106 44.71 104.55 45.45 104.55 15.17" />
          <polygon fill="url(#linear-gradient-31)" points="101.93 16.5 103.39 15.76 103.39 46.04 101.93 46.78 101.93 16.5" />
          <polygon fill="url(#linear-gradient-32)" points="99.32 17.83 100.77 17.09 100.77 47.37 99.32 48.11 99.32 17.83" />
          <polygon fill="url(#linear-gradient-33)" points="96.7 19.16 98.16 18.42 98.16 48.7 96.7 49.44 96.7 19.16" />
          <polygon fill="url(#linear-gradient-34)" points="94.09 20.49 95.54 19.75 95.54 50.03 94.09 50.77 94.09 20.49" />
          <polygon fill="url(#linear-gradient-35)" points="91.48 21.82 92.93 21.08 92.93 51.37 91.48 52.1 91.48 21.82" />
          <polygon fill="url(#linear-gradient-36)" points="88.86 23.15 90.32 22.41 90.32 52.7 88.86 53.44 88.86 23.15" />
          <polygon fill="url(#linear-gradient-37)" points="86.25 24.48 87.7 23.75 87.7 54.03 86.25 54.77 86.25 24.48" />
          <polygon fill="url(#linear-gradient-38)" points="83.64 25.82 85.09 25.08 85.09 55.36 83.64 56.1 83.64 25.82" />
          <polygon fill="url(#linear-gradient-39)" points="81.02 27.15 82.47 26.41 82.47 56.69 81.02 57.43 81.02 27.15" />
          <polygon fill="url(#linear-gradient-40)" points="78.41 28.48 79.86 27.74 79.86 58.02 78.41 58.76 78.41 28.48" />
          <polygon fill="url(#linear-gradient-41)" points="75.8 29.81 77.25 29.07 77.25 59.35 75.8 60.09 75.8 29.81" />
          <polygon fill="url(#linear-gradient-42)" points="73.18 31.14 74.64 30.4 74.64 60.68 73.18 61.42 73.18 31.14" />
          <polygon fill="url(#linear-gradient-43)" points="70.57 32.47 72.02 31.73 72.02 62.01 70.57 62.75 70.57 32.47" />
          <polygon fill="url(#linear-gradient-44)" points="67.95 33.8 69.41 33.06 69.41 63.34 67.95 64.08 67.95 33.8" />
          <polygon fill="url(#linear-gradient-45)" points="65.34 35.13 66.79 34.39 66.79 64.67 65.34 65.41 65.34 35.13" />
          <polygon fill="url(#linear-gradient-46)" points="62.73 36.46 64.18 35.72 64.18 66 62.73 66.75 62.73 36.46" />
          <polygon fill="url(#linear-gradient-47)" points="61.57 37.05 60.11 37.79 60.11 68.08 61.57 67.34 61.57 37.05" />
        </g>
        <text>Ban statistics</text>
        <path className="cls-50" d="M8.86,54.79l-1.53.78v-.66l1.31-3.42,1.12-.57v2.77l.49-.25v.64l-.49.25v1.05l-.9.46Zm0-.64v-1.9l-.77,2.29Z" />
        <path className="cls-50" d="M10.62,53.65a1.79,1.79,0,0,1,.15-.72,2,2,0,0,1,.44-.64.56.56,0,0,1-.37-.21.86.86,0,0,1-.14-.53,1.79,1.79,0,0,1,.32-1,2.46,2.46,0,0,1,1-.79,1.19,1.19,0,0,1,.94-.18c.21.09.32.32.32.68a1.65,1.65,0,0,1-.14.7,2.17,2.17,0,0,1-.36.58.47.47,0,0,1,.44.19,1,1,0,0,1,.15.6A2.05,2.05,0,0,1,13,53.45a2.48,2.48,0,0,1-1,.87C11.07,54.78,10.62,54.56,10.62,53.65Zm1.69-.34a1.93,1.93,0,0,0,.07-.57.93.93,0,0,0-.08-.44c-.06-.09-.17-.1-.32,0a.61.61,0,0,0-.33.36,1.62,1.62,0,0,0-.09.57,1,1,0,0,0,.09.45c0,.1.16.11.33,0A.6.6,0,0,0,12.31,53.31Zm0-2.59a.51.51,0,0,0-.09-.34c-.06-.06-.15-.06-.26,0a.59.59,0,0,0-.28.28,1,1,0,0,0-.09.43c0,.46.12.62.37.5S12.33,51.18,12.33,50.72Z" />
        <path className="cls-50" d="M15,48.9l-1.37.7V49L16,47.77v.55l-1.06,4.45-.94.47Z" />
        <path className="cls-50" d="M43.81,31.65a.42.42,0,0,1-.39-.26,1.77,1.77,0,0,1-.11-.69l.94-.48a1.18,1.18,0,0,0,.08.52c.05.09.16.09.32,0a.66.66,0,0,0,.27-.25.8.8,0,0,0,.11-.36,4.2,4.2,0,0,0,0-.55A1.32,1.32,0,0,0,45,29c-.06-.1-.17-.11-.35,0a.86.86,0,0,0-.43.62l-.83.42.07-2.56,2.32-1.19V27l-1.53.78,0,1a1.41,1.41,0,0,1,.3-.31,2.16,2.16,0,0,1,.45-.29q.51-.27.78,0a1.15,1.15,0,0,1,.26.9,3.73,3.73,0,0,1-.1.93,2,2,0,0,1-.4.75,2.51,2.51,0,0,1-.85.63A1.69,1.69,0,0,1,43.81,31.65Z" />
        <path className="cls-50" d="M47.88,28.62l-1.53.78v-.66l1.31-3.42,1.12-.57v2.77l.49-.25v.64l-.49.25v1.05l-.9.46Zm0-.64V26.09l-.78,2.28Z" />
        <path className="cls-50" d="M49.94,28.34c-.22-.12-.32-.4-.32-.83v-.15l1-.49V27a.74.74,0,0,0,.09.44c.06.07.17.06.32,0a.64.64,0,0,0,.31-.32,1.25,1.25,0,0,0,.08-.53.66.66,0,0,0-.12-.47c-.08-.07-.23-.06-.44.05l-.17.08v-.62l.15-.08a1,1,0,0,0,.46-.39,1.15,1.15,0,0,0,.12-.57.53.53,0,0,0-.09-.37c-.06-.07-.16-.06-.32,0a.6.6,0,0,0-.3.31,1.08,1.08,0,0,0-.09.48v.2l-1,.49v-.24A1.91,1.91,0,0,1,50,24.4a2.65,2.65,0,0,1,1-.82,1.4,1.4,0,0,1,1-.21c.23.09.35.32.35.71a1.61,1.61,0,0,1-.18.73,1.52,1.52,0,0,1-.45.57q.63-.12.63.72A2.3,2.3,0,0,1,52,27.28a2.54,2.54,0,0,1-1,.89C50.5,28.41,50.15,28.47,49.94,28.34Z" />
        <path className="cls-50" d="M75.62,26.73a.92.92,0,0,1-.32-.84v-.15l1-.49v.15a.8.8,0,0,0,.1.44c.06.07.16.07.32,0a.71.71,0,0,0,.31-.31,1.54,1.54,0,0,0,.08-.54.66.66,0,0,0-.12-.47c-.08-.07-.23-.05-.44,0a.61.61,0,0,0-.17.08V24l.15-.08a1,1,0,0,0,.45-.38,1.09,1.09,0,0,0,.13-.57.55.55,0,0,0-.09-.38c-.06-.06-.17-.05-.32,0a.66.66,0,0,0-.31.31,1.52,1.52,0,0,0-.09.48v.2l-1,.49v-.24a1.85,1.85,0,0,1,.36-1.09,2.75,2.75,0,0,1,1-.82,1.37,1.37,0,0,1,1-.21c.24.09.36.32.36.71a1.58,1.58,0,0,1-.18.73,1.55,1.55,0,0,1-.46.57c.42-.08.64.16.64.72a2.21,2.21,0,0,1-.33,1.18,2.48,2.48,0,0,1-1,.89C76.18,26.79,75.83,26.85,75.62,26.73Z" />
        <path className="cls-50" d="M78.48,25l1.23-2.3.09-.17c.15-.28.26-.51.34-.68a1.4,1.4,0,0,0,.1-.51.35.35,0,0,0-.09-.28q-.09-.06-.27,0a.7.7,0,0,0-.36.36,1.25,1.25,0,0,0-.1.53v.2l-.94.48v-.22a2.19,2.19,0,0,1,.33-1.16,2.56,2.56,0,0,1,1-.9,1.3,1.3,0,0,1,1-.2c.23.09.35.32.35.69a1.72,1.72,0,0,1-.15.69,8.82,8.82,0,0,1-.44.9l-.07.13-1,1.78,1.5-.76v.67l-2.58,1.32Z" />
        <path className="cls-50" d="M81.64,22.65a1.78,1.78,0,0,1,.14-.72,2,2,0,0,1,.45-.64.56.56,0,0,1-.38-.21.89.89,0,0,1-.14-.54,1.72,1.72,0,0,1,.33-1,2.43,2.43,0,0,1,.95-.79,1.19,1.19,0,0,1,.94-.18c.22.09.32.32.32.68a1.82,1.82,0,0,1-.13.7,2.2,2.2,0,0,1-.37.58.47.47,0,0,1,.44.19,1,1,0,0,1,.15.6A2.16,2.16,0,0,1,84,22.45a2.58,2.58,0,0,1-1,.87C82.09,23.78,81.64,23.55,81.64,22.65Zm1.68-.34a2,2,0,0,0,.07-.58.86.86,0,0,0-.08-.44c-.06-.09-.16-.09-.32,0a.65.65,0,0,0-.33.36,1.64,1.64,0,0,0-.08.57.89.89,0,0,0,.08.44q.09.17.33,0A.63.63,0,0,0,83.32,22.31Zm0-2.59a.51.51,0,0,0-.09-.34c-.06-.06-.15-.06-.26,0a.63.63,0,0,0-.28.28,1,1,0,0,0-.09.43c0,.46.12.62.37.5S83.34,20.18,83.34,19.72Z" />
        <path className="cls-50" d="M106.92,7.16,105.38,8V7.29l1.32-3.42,1.11-.57V6.06l.5-.25v.65l-.5.25v1l-.89.46Zm0-.64V4.63l-.78,2.29Z" />
        <path className="cls-50" d="M109,6.89c-.21-.13-.31-.41-.31-.84V5.9l1-.49v.15a.74.74,0,0,0,.09.44c.06.07.16.07.32,0a.62.62,0,0,0,.31-.31,1.54,1.54,0,0,0,.08-.54.68.68,0,0,0-.12-.47c-.08-.07-.23,0-.44,0l-.17.08V4.18l.15-.08a1.13,1.13,0,0,0,.46-.38,1.2,1.2,0,0,0,.12-.57.57.57,0,0,0-.09-.38c-.06-.06-.17,0-.32,0a.66.66,0,0,0-.31.31,1.34,1.34,0,0,0-.08.48v.2l-1,.49V4A1.79,1.79,0,0,1,109,3a2.67,2.67,0,0,1,1-.83,1.32,1.32,0,0,1,1-.2c.24.08.36.31.36.7a1.58,1.58,0,0,1-.18.73,1.55,1.55,0,0,1-.46.57c.43-.08.64.16.64.72A2.19,2.19,0,0,1,111,5.82a2.44,2.44,0,0,1-1,.89C109.53,7,109.19,7,109,6.89Z" />
        <path className="cls-50" d="M112.35,5.35a.4.4,0,0,1-.39-.26,1.75,1.75,0,0,1-.11-.68l.93-.48a1,1,0,0,0,.09.52c0,.08.16.09.31,0a.69.69,0,0,0,.28-.25,1,1,0,0,0,.11-.36c0-.14,0-.32,0-.56a1.4,1.4,0,0,0-.08-.56c-.06-.11-.18-.11-.35,0a.85.85,0,0,0-.43.62l-.83.43L112,1.18,114.29,0V.73l-1.54.78,0,1a1.67,1.67,0,0,1,.3-.31,2.66,2.66,0,0,1,.45-.29c.35-.17.61-.18.79,0a1.22,1.22,0,0,1,.26.9,3.3,3.3,0,0,1-.11.93,1.93,1.93,0,0,1-.4.76,2.88,2.88,0,0,1-.84.63A1.77,1.77,0,0,1,112.35,5.35Z" />
        <path className="cls-50" d="M12.09,60.27c0-.25-.23-.34-.51-.19a.92.92,0,0,0-.52.71c0,.25.23.34.52.19A.93.93,0,0,0,12.09,60.27Z" />
        <path className="cls-50" d="M48.33,35.29c0-.25-.23-.34-.51-.19a.9.9,0,0,0-.51.71c0,.25.22.34.51.19A.93.93,0,0,0,48.33,35.29Z" />
        <path className="cls-50" d="M80.89,30c0-.25-.23-.33-.52-.19a1,1,0,0,0-.51.72c0,.25.23.33.51.19A1,1,0,0,0,80.89,30Z" />
        <path className="cls-50" d="M111,11.46c0-.25-.23-.34-.51-.19A.93.93,0,0,0,110,12c0,.25.23.34.51.19A.93.93,0,0,0,111,11.46Z" />
      </g>
    </g>
  </Svg >
);

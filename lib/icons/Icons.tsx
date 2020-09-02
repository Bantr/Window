import * as React from 'react';
import { Icon, IIconProps, defaultProps, IconContainer } from './BaseIcon';

export const highlight: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="5" cy="12" r="2" />
    </Icon>
  </IconContainer>
); highlight.defaultProps = defaultProps;

export const AlertTriangle: React.FC<IIconProps> = (props) => (
  <IconContainer
    highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z" /><circle cx="12" cy="16" r="1" /><path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" />
    </Icon>
  </IconContainer>
); AlertTriangle.defaultProps = defaultProps;

export const Archive: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick}>
    <Icon {...props}>
      <path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z" />
      <rect height="2" rx=".87" ry=".87" width="6" x="9" y="12" />
    </Icon>
  </IconContainer>
); Archive.defaultProps = defaultProps;

export const Arrow: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" />
    </Icon>
  </IconContainer>
); Arrow.defaultProps = defaultProps;

export const ArrowBig: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
    </Icon>
  </IconContainer>
); ArrowBig.defaultProps = defaultProps;

export const Attachment: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z" />
    </Icon>
  </IconContainer>
); Attachment.defaultProps = defaultProps;

export const Bantr: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon
      {...props}
      viewBox="0 0 110 139"
    >
      <rect className="primary" height="100" rx="10" width="30" />
      <rect className="primary" height="80" rx="10" width="30" x="40" y="59" />
      <rect className="secondary" height="66" rx="10" width="30" x="80" y="33" />
    </Icon>
  </IconContainer>
); Bantr.defaultProps = defaultProps;

export const Bell: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z" />
    </Icon>
  </IconContainer>
); Bell.defaultProps = defaultProps;

export const CheckMark: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon
      {...props}
      viewBox="0 0 24 24"
    >
      <path d="m9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
    </Icon>
  </IconContainer>
); CheckMark.defaultProps = defaultProps;

export const Clock: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z" />
    </Icon>
  </IconContainer>
); Clock.defaultProps = defaultProps;

export const Copy: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" /><path d="M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06z" />
    </Icon>
  </IconContainer>
); Copy.defaultProps = defaultProps;

export const CreditCard: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z" /><path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z" /><path d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z" />
    </Icon>
  </IconContainer>
); CreditCard.defaultProps = defaultProps;

export const Dashboard: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z" />
    </Icon>
  </IconContainer>
); Dashboard.defaultProps = defaultProps;

export const Discord: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      {
        props.outline ?
          <path d="M10.149,5.031,9.466,5.1A11.5,11.5,0,0,0,4.277,7.148H4.243l-.034.034A4.55,4.55,0,0,0,3.185,8.957,25.8,25.8,0,0,0,2.16,11.894,28.415,28.415,0,0,0,1,19.335v.239l.1.2a7.59,7.59,0,0,0,3.515,2.834,9.075,9.075,0,0,0,3.21.922l.512.034,1.194-2.561a16.241,16.241,0,0,0,3.483.376,15.969,15.969,0,0,0,3.448-.376l1.2,2.561.512-.034a9.065,9.065,0,0,0,3.208-.922A7.592,7.592,0,0,0,24.9,19.779l.1-.2v-.239a28.343,28.343,0,0,0-1.127-7.443,25.8,25.8,0,0,0-1.024-2.934A4.608,4.608,0,0,0,21.79,7.183l-.034-.035A11.579,11.579,0,0,0,16.533,5.1l-.649-.069s-.495,1.656-.649,2.356a19.107,19.107,0,0,0-2.219-.173,18.269,18.269,0,0,0-2.219.172c-.153-.7-.649-2.356-.649-2.356ZM8.784,7.387c.038.11.107.251.137.341a11.3,11.3,0,0,0-3.243,1.2L6.6,10.8a14.661,14.661,0,0,1,6.418-1.434A14.661,14.661,0,0,1,19.435,10.8l.888-1.879a10.762,10.762,0,0,0-3.141-1.194c.029-.09.131-.229.17-.342a8,8,0,0,1,3.277,1.4,6.5,6.5,0,0,1,.648,1.092A21.326,21.326,0,0,1,22.2,12.44a26.174,26.174,0,0,1,1.059,6.52,6.3,6.3,0,0,1-2.595,1.912,7.906,7.906,0,0,1-1.844.615l-.444-.956c.251-.085.295-.081.512-.172A7.942,7.942,0,0,0,20.9,19.234l-.888-1.707a6.53,6.53,0,0,1-1.6.853,15.148,15.148,0,0,1-5.394.922,12.7,12.7,0,0,1-4.985-.922,6.443,6.443,0,0,1-1.6-.853L5.1,19.232a8.677,8.677,0,0,0,2.048,1.127c.218.09.291.085.546.17l-.478.956a8.072,8.072,0,0,1-1.877-.615,6.31,6.31,0,0,1-2.595-1.912A26.174,26.174,0,0,1,3.8,12.439a20.973,20.973,0,0,1,.955-2.561A8.19,8.19,0,0,1,5.37,8.786a8.4,8.4,0,0,1,3.414-1.4Zm1.5,5.257c-.9,0-1.639.978-1.639,2.185s.734,2.185,1.639,2.185,1.639-.978,1.639-2.185S11.19,12.644,10.286,12.644Zm5.462,0c-.9,0-1.639.978-1.639,2.185s.734,2.185,1.639,2.185,1.639-.978,1.639-2.185S16.652,12.644,15.748,12.644Z" /> : <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
      }
    </Icon>
  </IconContainer>
); Discord.defaultProps = defaultProps;

export const Edit: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z" />
    </Icon>
  </IconContainer>
); Edit.defaultProps = defaultProps;

export const Eye: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z" /><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" />
    </Icon>
  </IconContainer>
); Eye.defaultProps = defaultProps;

export const EyeOff: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z" /><path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25z" /><path d="M21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1z" />
    </Icon>
  </IconContainer>
); EyeOff.defaultProps = defaultProps;

export const Faceit: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props} className="faceit">
      <path d="M24 2.7c0-.1-.1-.2-.1-.2-.1 0-.1 0-.2.1-2 3.1-4.1 6.2-6.1 9.4H.2c-.2 0-.3.3-.1.4 7.2 2.7 17.7 6.8 23.5 9.1.2.1.4-.1.4-.2V2.7z" />
    </Icon>
  </IconContainer>
); Faceit.defaultProps = defaultProps;

export const Filter: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z" />
    </Icon>
  </IconContainer>
); Filter.defaultProps = defaultProps;

export const Fullscreen: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" /><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
    </Icon>
  </IconContainer>
); Fullscreen.defaultProps = defaultProps;

export const Github: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      {props.outline ?
        <path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z" />
        : <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" />
      }
    </Icon>
  </IconContainer>
); Github.defaultProps = defaultProps;

export const Globe: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z" />
    </Icon>
  </IconContainer>
); Globe.defaultProps = defaultProps;

export const GlobeDetailed: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2zm11.93 2.52a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .54-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z" />
    </Icon>
  </IconContainer>
); GlobeDetailed.defaultProps = defaultProps;

export const Hamburger: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <rect height="2" rx=".95" ry=".95" width="18" x="3" y="11" />
      <rect height="2" rx=".95" ry=".95" width="18" x="3" y="16" />
      <rect height="2" rx=".95" ry=".95" width="18" x="3" y="6" />
    </Icon>
  </IconContainer>
); Hamburger.defaultProps = defaultProps;

export const Heart: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      {
        props.outline ?
          <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z" />
          :
          <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z" />
      }
    </Icon>
  </IconContainer>
); Heart.defaultProps = defaultProps;

export const Home: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
    </Icon>
  </IconContainer>
); Home.defaultProps = defaultProps;

export const Info: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><circle cx="12" cy="8" r="1" /><path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
    </Icon>
  </IconContainer>
); Info.defaultProps = defaultProps;

export const LogIn: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
      <path d="M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z" />
    </Icon>
  </IconContainer>
); LogIn.defaultProps = defaultProps;

export const LogOut: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z" /><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z" />
    </Icon>
  </IconContainer>
); LogOut.defaultProps = defaultProps;

export const Maps: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM5 7.44l2-.89v10l-2 .89zm4-.89l2 .89v10l-2-.89zm4 .89l2-.89v10l-2 .89zm6 10l-2-.89v-10l2 .89z" />
    </Icon>
  </IconContainer>
); Maps.defaultProps = defaultProps;

export const Minus: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
    </Icon>
  </IconContainer>
); Minus.defaultProps = defaultProps;

export const Options: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
    </Icon>
  </IconContainer>
); Options.defaultProps = defaultProps;

export const People: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" /><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z" />
    </Icon>
  </IconContainer>
); People.defaultProps = defaultProps;

export const Person: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
    </Icon>
  </IconContainer>
); Person.defaultProps = defaultProps;

export const PersonAdd: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z" />
      <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
      <path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
    </Icon>
  </IconContainer>
); PersonAdd.defaultProps = defaultProps;

export const PersonRemove: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z" /><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
    </Icon>
  </IconContainer>
); PersonRemove.defaultProps = defaultProps;

export const Plus: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
    </Icon>
  </IconContainer>
); Plus.defaultProps = defaultProps;

export const Premium: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19z" />
    </Icon>
  </IconContainer>
); Premium.defaultProps = defaultProps;

export const QuestionMark: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" /><circle cx="12" cy="19" r="1" />
    </Icon>
  </IconContainer>
); QuestionMark.defaultProps = defaultProps;

export const Radio: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
      <path d="M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z" />
      <path d="M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z" />
      <path d="M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z" />
      <path d="M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z" />
    </Icon>
  </IconContainer>
); Radio.defaultProps = defaultProps;

export const Search: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
    </Icon>
  </IconContainer>
); Search.defaultProps = defaultProps;

export const Settings: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" />
      <path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z" />
    </Icon>
  </IconContainer>
); Settings.defaultProps = defaultProps;

export const Steam: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path
        clipRule="evenodd"
        d="M22 8.165a5.48 5.48 0 01-5.59 5.478l-5.335 3.956a4.027 4.027 0 11-3.55-4.452l3.516-4.977v-.005a5.48 5.48 0 0110.959 0zm-11.99 8.95a2.902 2.902 0 11-5.803 0 2.902 2.902 0 015.803 0zm6.576-5.185a3.77 3.77 0 100-7.54 3.77 3.77 0 000 7.54z"
        fillRule="evenodd"
      >
      </path>
      <circle cx="16.609" cy="8.077" r="3.06" />
      <rect
        height="4.84"
        rx="2.42"
        transform="rotate(21.78 -15.7 5.378)"
        width="27.596"
        x="-15.7"
        y="5.378"
      />
    </Icon>
  </IconContainer>
); Steam.defaultProps = defaultProps;

export const Star: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>

      {
        props.outline ?
          <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18zM12 16.1a.92.92 0 0 1 .46.11l3.77 2-.72-4.21a1 1 0 0 1 .29-.89l3-2.93-4.2-.62a1 1 0 0 1-.71-.56L12 5.25 10.11 9a1 1 0 0 1-.75.54l-4.2.62 3 2.93a1 1 0 0 1 .29.89l-.72 4.16 3.77-2a.92.92 0 0 1 .5-.04z" />
          :
          <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
      }

    </Icon>
  </IconContainer>
); Star.defaultProps = defaultProps;

export const Text: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
    </Icon>
  </IconContainer>
); Text.defaultProps = defaultProps;

export const Tournament: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z" />
    </Icon>
  </IconContainer>
); Tournament.defaultProps = defaultProps;

export const Tracker: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z" />
    </Icon>
  </IconContainer>
); Tracker.defaultProps = defaultProps;

export const Trash: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z" />
    </Icon>
  </IconContainer>
); Trash.defaultProps = defaultProps;

export const Undo: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76zm-9.77-9.5a11.07 11.07 0 0 1 8.81 4.26A9 9 0 0 0 10.45 9a1 1 0 0 1-1-1V6.08l-4.82 4.17 4.82 4.21v-2a1 1 0 0 1 1-.96z" />
    </Icon>
  </IconContainer>
); Undo.defaultProps = defaultProps;

export const Video: React.FC<IIconProps> = (props) => (
  <IconContainer highlight={props.highlight} onClick={props.onClick} >
    <Icon {...props}>
      <path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zM15 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm5-1.4L17.19 12 20 9.4z" />
    </Icon>
  </IconContainer>
); Video.defaultProps = defaultProps;

/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

declare module 'simplebar-react' {
  interface IProps extends React.HTMLAttributes<HTMLElement> {
    scrollableNodeProps?: object;
    options?: object;
    autoHide?: boolean;
    forceVisible?: string;
    direction?: string;
    timeout?: number;
    clickOnTrack?: boolean;
    scrollbarMinSize?: number;
    scrollbarMaxSize?: number;
  }
  export default class SimpleBar extends React.Component<IProps> { }
}

import React from 'react';
import { H1, H2, H3, H4, H5 } from './style';

interface IProps {
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large' | 'huge' | 'massive';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
}

export const Title: React.FC<IProps> = ({ align = 'left', size = 'medium', type = 'h2', children }) => {
  function defineSize(): string {
    switch (size) {
      case 'small':
        return '80%';
      case 'medium':
        return '100%';
      case 'large':
        return '120%';
      case 'huge':
        return '140%';
      case 'massive':
        return '160%';
    }
  }

  function defineType(): JSX.Element {
    switch (type) {
      case 'h1':
        return (
          <H1 align={align} size={defineSize()}>
            {children}
          </H1>
        );
      case 'h2':
        return (
          <H2 align={align} size={defineSize()}>
            {children}
          </H2>
        );
      case 'h3':
        return (
          <H3 align={align} size={defineSize()}>
            {children}
          </H3>
        );
      case 'h4':
        return (
          <H4 align={align} size={defineSize()}>
            {children}
          </H4>
        );
      case 'h5':
        return (
          <H5 align={align} size={defineSize()}>
            {children}
          </H5>
        );
    }
  }

  return defineType();
};

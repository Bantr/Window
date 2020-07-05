import * as React from 'react';
import { Spinner } from 'lib/icons';
import { Default, Outline, Text } from './style';

interface IProps {
  active?: boolean;
  disabled?: boolean;
  className?: string;
  color?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'text';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  isLoading?: boolean;
}
// TODO: disabled is passed as class (why?)

export const Button: React.FC<IProps> = ({
  active = true,
  children,
  className,
  color,
  disabled = false,
  isLoading = false,
  onClick,
  variant = 'default'
}) => {
  function renderSwitch(variant: 'default' | 'outline' | 'text'): JSX.Element {
    switch (variant) {
      case 'default':
        return (
          <Default active={active} className={className} color={color} onClick={(e: React.MouseEvent<HTMLButtonElement>): void => onClick(e)}>
            {' '}
            {isLoading ? <Spinner /> : ''}
            {children}
          </Default>
        );
      case 'outline':
        return (
          <Outline active={active} className={className} color={color} onClick={(e: React.MouseEvent<HTMLButtonElement>): void => onClick(e)}>
            {isLoading ? <Spinner /> : ''}
            {children}
          </Outline>
        );
      case 'text':
        return (
          <Text active={active} className={className} color={color} onClick={(e: React.MouseEvent<HTMLButtonElement>): void => onClick(e)}>
            {isLoading ? <Spinner /> : ''}
            {children}
          </Text>
        );
    }
  }
  return renderSwitch(variant);
};

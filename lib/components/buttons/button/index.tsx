import * as React from 'react';
import { Spinner } from 'lib/icons';
import { Default, Outline, Text, IconContainer } from './style';

interface IProps {
  active?: boolean;
  className?: string;
  color?: string;
  variant?: 'default' | 'outline' | 'text';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  active = true,
  children,
  className,
  color,
  icon,
  isLoading = false,
  onClick,
  variant = 'default'
}) => {
  function renderSwitch(variant: 'default' | 'outline' | 'text'): JSX.Element {
    switch (variant) {
      case 'default':
        return (
          <Default active={active} className={className} color={color} hasIcon={icon ? true : false} onClick={(e: React.MouseEvent<HTMLButtonElement>): void => onClick(e)}>
            {' '}
            {isLoading ? <Spinner /> : <IconContainer>{icon}</IconContainer>}
            {children}
          </Default>
        );
      case 'outline':
        return (
          <Outline active={active} className={className} color={color} hasIcon={icon ? true : false} onClick={(e: React.MouseEvent<HTMLButtonElement>): void => onClick(e)}>
            {isLoading ? <Spinner /> : <IconContainer>{icon}</IconContainer>}
            {icon}{children}
          </Outline>
        );
      case 'text':
        return (
          <Text active={active} className={className} color={color} hasIcon={icon ? true : false} onClick={(e: React.MouseEvent<HTMLButtonElement>): void => onClick(e)}>
            {isLoading ? <Spinner /> : <IconContainer>{icon}</IconContainer>}
            {children}
          </Text>
        );
    }
  }
  return renderSwitch(variant);
};

import * as React from 'react';
import { Spinner } from 'lib/icons';
import { Link } from 'react-router-dom';
import { Default, Outline, Text } from './style';

interface IProps {
  active?: boolean;
  className?: string;
  isPrimaryColor?: boolean;
  variant?: 'default' | 'outline' | 'text';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  isLoading?: boolean;
  to?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  active = true,
  children,
  className,
  isPrimaryColor = true,
  icon,
  to,
  isLoading = false,
  onClick,
  variant = 'default'
}) => {
  function toLink(el: React.ReactElement): React.ReactElement {
    if (to) {
      return (<Link to={to}>{el}</Link>);
    }
    return el;
  }

  function renderSwitch(variant: 'default' | 'outline' | 'text'): React.ReactElement {
    switch (variant) {
      case 'default':
        return (
          toLink(
            <Default
              active={active}
              className={className}
              hasIcon={icon ? true : false}
              isLoading={isLoading}
              isPrimaryColor={isPrimaryColor}
              onClick={(e: React.MouseEvent<HTMLButtonElement>): void => (typeof onClick === 'function' ? onClick(e) : null)}>
              {isLoading ? <Spinner /> : icon}
              {children}
            </Default>
          )
        );
      case 'outline':
        return (
          toLink(
            <Outline
              active={active}
              className={className}
              hasIcon={icon ? true : false}
              isLoading={isLoading}
              isPrimaryColor={isPrimaryColor}
              onClick={(e: React.MouseEvent<HTMLButtonElement>): void => (typeof onClick === 'function' ? onClick(e) : null)}>
              {isLoading ? <Spinner /> : icon}
              {icon}{children}
            </Outline>
          ));
      case 'text':
        return (
          toLink(
            <Text
              active={active}
              className={className}
              hasIcon={false}
              isLoading={isLoading}
              isPrimaryColor={isPrimaryColor}
              onClick={(e: React.MouseEvent<HTMLButtonElement>): void => (typeof onClick === 'function' ? onClick(e) : null)}>
              {children}
            </Text>
          ));
    }
  }
  return renderSwitch(variant);
};

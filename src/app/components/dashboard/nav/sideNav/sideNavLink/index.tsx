import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { NavLink } from 'react-router-dom';
import { IconContainer, LinkContainer, TextContainer } from './style';

interface IProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  collapsed: boolean;
  external?: boolean;
}
export const SideNavLink: React.FC<IProps> = ({ icon, text, collapsed, to }) => (
  <LinkContainer data-cy={`sideNav-${text.toLowerCase()}`}>
    {
      collapsed ?
        <Tooltip
          mouseEnterDelay={.25}
          overlay={text}
          placement="right"
          trigger="hover"
        >
          <NavLink activeClassName="active" className="link" to={to}>
            <IconContainer>
              {icon}
            </IconContainer>
            {
              collapsed ? '' : (
                <TextContainer>
                  {text}
                </TextContainer>)
            }
          </NavLink>
        </Tooltip>
        :
        <NavLink activeClassName="active" className="link" to={to}>
          <IconContainer>
            {icon}
          </IconContainer>
          {
            collapsed ? '' : (
              <TextContainer>
                {text}
              </TextContainer>)
          }
        </NavLink>
    }
  </LinkContainer>
);

export const ExternalSideNavLink: React.FC<IProps> = ({ icon, text, collapsed, to }) => (
  <LinkContainer className="external">
    {
      collapsed ?
        <Tooltip
          mouseEnterDelay={.25}
          overlay={text}
          placement="right"
          trigger="hover"
        >
          <a href={to} rel="noopener noreferrer" target="_blank">
            <IconContainer>
              {icon}
            </IconContainer>
            {
              collapsed ? '' : (
                <TextContainer className="external">
                  {text}
                </TextContainer>)
            }
          </a>
        </Tooltip>
        : <a href={to} rel="noopener noreferrer" target="_blank">
          <IconContainer>
            {icon}
          </IconContainer>
          {
            collapsed ? '' : (
              <TextContainer className="external">
                {text}
              </TextContainer>)
          }
        </a>
    }
  </LinkContainer >
);

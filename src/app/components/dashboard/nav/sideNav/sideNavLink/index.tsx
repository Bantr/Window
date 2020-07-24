import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { Link } from '@reach/router';
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
          overlay={text}
          placement="right"
          trigger="hover"
        >
          <Link getProps={({ isCurrent }): object => ({ className: isCurrent ? 'link active' : 'link' })} to={to}>
            <IconContainer>
              {icon}
            </IconContainer>
            {
              collapsed ? '' : (
                <TextContainer>
                  {text}
                </TextContainer>)
            }
          </Link>
        </Tooltip>
        :
        <Link getProps={({ isCurrent }): object => ({ className: isCurrent ? 'link active' : 'link' })} to={to}>
          <IconContainer>
            {icon}
          </IconContainer>
          {
            collapsed ? '' : (
              <TextContainer>
                {text}
              </TextContainer>)
          }
        </Link>
    }
  </LinkContainer>
);

export const ExternalSideNavLink: React.FC<IProps> = ({ icon, text, collapsed, to }) => (
  <LinkContainer className="external">
    {
      collapsed ?
        <Tooltip
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

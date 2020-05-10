import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { Link } from '@reach/router';
import { IconContainer, LinkContainer, TextContainer } from './style';

interface IProps {
  icon: JSX.Element;
  text: string;
  to: string;
  isCollapsed: boolean;
  external?: boolean;
}
export const SideNavLink: React.FC<IProps> = ({ icon, text, isCollapsed, to }) => (
  <LinkContainer>
    {
      isCollapsed ?
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
              isCollapsed ? '' : (
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
            isCollapsed ? '' : (
              <TextContainer>
                {text}
              </TextContainer>)
          }
        </Link>
    }
  </LinkContainer>
);

export const ExternalSideNavLink: React.FC<IProps> = ({ icon, text, isCollapsed, to }) => (
  <LinkContainer className="external">
    {
      isCollapsed ?
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
              isCollapsed ? '' : (
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
            isCollapsed ? '' : (
              <TextContainer className="external">
                {text}
              </TextContainer>)
          }
        </a>
    }
  </LinkContainer >
);

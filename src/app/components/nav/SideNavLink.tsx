import * as React from 'react';
import styled from 'styled-components';
import Tooltip from 'rc-tooltip';
import { Link } from '@reach/router';

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px 0 20px 15px;
  transition: transform 0.2s ease-in-out;
  overflow-x: hidden;

  &.external {
    margin: 10px 0 10px 15px;
  }

  &:hover {
    transform: translateX(5px);
  }
  .link, a {
    display: flex;
  }
  .link.active {
    color: ${({ theme }): string => theme.p};
  }
`;

const IconContainer = styled.div`
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-size: 15px;
  font-weight: 500;

  &.external {
    font-size: 12px;
  }
`;

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

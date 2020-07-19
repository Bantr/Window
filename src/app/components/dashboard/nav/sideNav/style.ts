import styled, { keyframes } from 'styled-components';

export const Container = styled.div<{ collapsed: boolean }>`
  position: relative;
  height: calc(100vh - 145px);
  width: ${({ collapsed }): string => (collapsed ? '50px' : '200px')};
  min-width: ${({ collapsed }): string => (collapsed ? '50px' : '200px')};
  background-color: ${({ theme }): string => theme.pb};
  padding: 50px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out;
  z-index: 2; /* elements like coming soon should show above the main view components */
`;

export const Collapse = styled.div`
  position: absolute;
  margin: auto 0;
  right: -20px;
  width: 25px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }): string => theme.p};
  top: 0;
  bottom: 0;
  z-index: 50;
`;

export const CollapseIconContainer = styled.div<{ collapsed: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    animation: ${({ collapsed }): any => (collapsed ? CollapsedAnimation : openAnimation)} 0.5s infinite;
  }
`;

export const PrivacyContainer = styled.div<{ collapsed: boolean }>`
  display: flex;
  width: ${({ collapsed }): string => collapsed ? '0px' : '200px'};
  overflow: hidden;
  white-space: nowrap;
  justify-content: space-between;
  transition: ${({ collapsed }): string => collapsed ? 'none' : 'width 0.3s ease-in-out'};
  font-size: 12px;
  margin-top: 20px;
`;

const openAnimation = keyframes`
  0% {
    transform: translateX(0)
  }
  50% {
    transform: translateX(-3px)
  }
  100% {
    transform: translateX(0);
  }
`;
const CollapsedAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
  100%{
    transform: translateX(0);
  }
`;

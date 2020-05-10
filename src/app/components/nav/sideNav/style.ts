import styled, { keyframes } from 'styled-components';

export const Container = styled.div<{ isCollapsed: boolean }>`
  position: relative;
  height: calc(100vh - 145px);
  width: ${({ isCollapsed }): string => (isCollapsed ? '50px' : '200px')};
  min-width: ${({ isCollapsed }): string => (isCollapsed ? '50px' : '200px')};
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

export const CollapseIconContainer = styled.div<{ isCollapsed }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    animation: ${({ isCollapsed }): any => (isCollapsed ? CollapsedAnimation : openAnimation)} 0.5s infinite;
  }
`;

export const ComingSoon = styled.div`
  position:absolute;
  right: -90px;
  padding: 5px 10px;
  background-color: ${({ theme }): string => theme.s};
  border-radius: 5px;
  font-weight: 800;
  font-size: 10px;
  text-transform: uppercase;
  color: white;
`;

export const PrivacyContainer = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  width: ${({ isCollapsed }): string => isCollapsed ? '0px' : '200px'};
  overflow: hidden;
  white-space: nowrap;
  justify-content: space-between;
  transition: ${({ isCollapsed }): string => isCollapsed ? 'none' : 'width 0.3s ease-in-out'};
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
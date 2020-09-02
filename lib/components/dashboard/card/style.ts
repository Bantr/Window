import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }): string => theme.pb};
  min-height: 335px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 1px -2px, rgba(0, 0, 0, 0.14) 0 12px 2px 0, rgba(0, 0, 0, 0.12) 0 20px 5px 0;
    transform: translate3d(0, -5px, 0) scale(1.02);
  }
`;
export const SettingsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  border-bottom: 2px solid ${({ theme }): string => theme.sb};
  min-height: 75px;
`;

export const Content = styled.div<{ center: boolean }>`
  display: flex;
  align-items: ${({ center }) => center ? 'center' : 'flex-start'};
  justify-content: ${({ center }) => center ? 'center' : 'flex-start'};
  width: 100%;
  min-height: 300px;
  padding: 20px;
`;

export const SummaryContainer = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
`;

export const SummaryItem = styled.div``;

export const LiveContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ErrorMessage = styled.span`
  width: 75%;
  text-align: center;
`;

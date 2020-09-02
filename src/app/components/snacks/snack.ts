import styled from 'styled-components';

export const SnackContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 100px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }): string => theme.pb};
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
`;

export interface IDefaultSnackProps {
  message: string | React.ReactNode;
  key: React.ReactText;
}

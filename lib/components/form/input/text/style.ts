import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
`;

export const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.label<{ showError: boolean }>`
  color: ${({ theme, showError }): string => showError ? theme.error : theme.t};
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
`;
export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
`;

export const ErrorContainer = styled.div<{ showError: boolean }>`
  position: absolute;
  min-height: 40px;
  bottom: -45px;
  height: auto;
  width: ${({ showError }): string => showError ? '100%' : '0'};
  background-color: ${({ theme }): string => theme.error};
  transition: width 0.2s ease-in-out, transform 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
  transform: ${({ showError }): string => `translate(${showError ? '0' : '5px'})`};
`;

export const Error = styled.p`
  min-width: 100%;
  width: 100%;
  padding: 5px 10px;
  height: 40px;
  color: white;
`;

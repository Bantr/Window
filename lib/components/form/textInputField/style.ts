import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  width: 100%;
`;
export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;

`;

export const ErrorContainer = styled.div<{ isError: boolean }>`
  width: ${({ isError }): string => isError ? '100%' : '0'};
  background-color: #b00020;
  transition: width 0.2s ease-in-out;
  overflow: hidden;
  height: auto;
  min-height: 40px;
`;

export const Error = styled.p`
  width: 100%;
  color: white;
`;

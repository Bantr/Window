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
  color: ${({ theme, showError }): string => showError ? theme.p : theme.t};
  width: 100%;
  text-transform: capitalize;
`;
export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
  position: relative;

  &.placeholder {
    height: 55px;
  }

  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 20px;
    scale: 1.5;
  }

  &:focus{
    .icon path {
      transition: fill .2s ease-in-out;
      fill: ${({ theme }): string => theme.p};
    }
  }

`;

export const Input = styled.input<{ hasIcon: boolean; hasError: boolean }>`
  width: 100%;
  padding-left: ${({ hasIcon }): string => hasIcon ? '60px' : '15px' /* 15 is the standard */};
  border-color: ${({ theme, hasError }): string => hasError ? theme.p : 'none'};

  &::placeholder{
    text-transform: capitalize;
  }
`;

export const ErrorContainer = styled.div<{ showError: boolean }>`
  position: absolute;
  min-height: 40px;
  bottom: -50px;
  height: auto;
  width: ${({ showError }): string => showError ? '100%' : '0'};
  background-color: ${({ theme }): string => theme.p};
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
  font-weight: 500;
`;

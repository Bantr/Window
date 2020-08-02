import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
`;

export const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
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
    height: 44px;
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

export const Input = styled.input<{ hasIcon: boolean; hasError: boolean; color: 'primary' | 'secondary' }>`
  width: 100%;
  padding-left: ${({ hasIcon }): string => hasIcon ? '60px' : '15px' /* 15 is the standard */};
  border-color: ${({ theme, hasError }): string => hasError ? theme.p : 'none'};
  background-color: ${({ theme, color }): string => color === 'primary' ? theme.pb : theme.sb};

  &::placeholder{
    text-transform: capitalize;
  }

  &[readOnly]{
    opacity: .5;
    &:focus {
      border-color: transparent;
    }
  }
`;

export const ErrorContainer = styled.div<{ showError: boolean }>`
  position: absolute;
  min-height: 40px;
  bottom: -60px;
  height: auto;
  width: ${({ showError }): string => showError ? '100%' : '0'};
  background-color: ${({ theme }): string => theme.p};
  transition: width 0.2s ease-in-out, transform 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
  transform: ${({ showError }): string => `translate(${showError ? '0' : '5px'})`};
  z-index: 5;
`;

export const Error = styled.span`
  display: block;
  min-width: 100%;
  width: 100%;
  padding: 5px 5px 5px 15px;
  height: 50px;
  font-weight: 500;
`;

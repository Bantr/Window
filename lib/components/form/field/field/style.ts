import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 25px;
  position: relative;
`;

export const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Label = styled.label<{ showError: boolean }>`
  color: ${({ theme, showError }): string => showError ? theme.error : theme.t};
  width: 100%;
  user-select: none;
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
  border-color: ${({ theme, hasError }): string => hasError ? theme.error : 'transparent'};
  background-color: ${({ theme, color }): string => color === 'primary' ? theme.pb : theme.sb};

  &:focus {
    border-color: ${({ theme, hasError }): string => hasError ? theme.error : theme.p};
  }

  &::placeholder{
    text-transform: capitalize;
  }

  &[readOnly]{
    opacity: .5;
    &:focus {
      border-color: transparent;
    }
  }
  &[type='password']{
    letter-spacing: 3px;
  }
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
  z-index: 5;
`;

export const Error = styled.span`
  display: block;
  min-width: 100%;
  width: 100%;
  padding: 5px 5px 5px 15px;
  height: 40px;
  font-weight: 500;
  white-space: nowrap;
`;

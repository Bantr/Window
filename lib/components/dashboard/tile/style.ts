import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.pb};
  min-height: 300px;
  border-radius: 10px;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0 5px 1px -2px, rgba(0, 0, 0, 0.14) 0 12px 2px 0, rgba(0, 0, 0, 0.12) 0 20px 5px 0;
    transform: translate3d(0, -2px, 0) scale(1.02);
  }

  h3 {
    word-spacing: 100vw;
    font-weight: 500;
    font-size: 2.5rem;
  }

  &.placeholder {
    border-radius: 10px;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

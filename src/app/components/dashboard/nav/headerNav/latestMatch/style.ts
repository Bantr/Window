import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 22px;
  background-color: ${({ theme }) => theme.pb};

  &:hover {
    background-color: ${({ theme }) => theme.sb};
  }

  &.placeholder {
    width: 270px;
    height: 35px;
    padding: 0;
  }

  .icon {
    margin-left: 10px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin-left: 15px;
    font-size: 25px;
    cursor: default;

    &.pointer{
      cursor: pointer;
    }
  }
`;

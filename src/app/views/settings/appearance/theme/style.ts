import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 5px;

    .icon {
      margin-left: 5px;
    }
  }
`;

export const Inner = styled.div`
  width: 100%;
  padding: 25px;
  margin: 20px 0;
  background-color: ${({ theme }): string => theme.sb};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContainer = styled.div`
  min-width: 300px;
`;

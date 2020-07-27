import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 600px;
`;

export const ActionContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;

  button {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  width: 100%;
  background-color: purple;
  margin-bottom: 25px;
`;

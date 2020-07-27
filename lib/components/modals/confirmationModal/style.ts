import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  height: 150px;
  width: 500px;
`;

export const Description = styled.p`
  margin-bottom: 35px;
  user-select: none;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Cancel = styled.div`
  cursor: pointer;
  user-select: none;
  margin-right: 15px;
  font-size: 0.9rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  user-select: none;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
`;

export const Inner = styled.div`
  padding: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {
    font-weight: 500;
  }
`;

export const Message = styled.div`
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

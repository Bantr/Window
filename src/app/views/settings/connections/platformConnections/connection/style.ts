import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: ${({ theme }): string => theme.sb};
  border-radius: 10px;
  padding: 35px;
  margin: 20px 0;
`;

export const ConnectionDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p{
    font-size: 0.7rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CheckMarkContainer = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  margin-left: 5px;
  justify-content: center;
  padding: 3px;
  border-radius: 50%;
  background-color: ${({ theme }): string => theme.p};

  .icon {
    width: 20px;
    height: 20px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  &::after {
  content: '';
  position: absolute;
  left: 0;
  top: 55%;
  width: 300px;
  height: 400px;
  border-radius: 50%;
  border: 40px solid ${({ theme }): string => theme.s};
  transform: translateX(-60%);
  }
`;

export const Inner = styled.div`
  padding: 200px 0;
  width: 70%;
  margin: 0 auto;

  h2 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
`;

export const FeedContainer = styled.div`
  position: relative;
  background-color: ${({ theme }): string => theme.p};
  width: 100%;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 300px;
`;

export const FeedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 800;

  .amount {
    font-size: 6rem;
  }
  .text {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

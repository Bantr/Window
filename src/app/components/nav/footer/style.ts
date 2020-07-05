import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 100px;
  width: 100%;
  padding: 20px 20px 50px 20px;
`;

export const Inner = styled.div`
  margin: 0 auto;
  max-width:1250px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const PanelContainer = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-bottom: 50px;
`;

export const Panel = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  a{
    margin: 5px 0;
    opacity: 0.7;
    color: ${({ theme }): string => theme.t};
    will-change: opacity;
    transition: opacity 0.2s ease-in-out;

    &:hover{
      opacity: 1;
    }
  }

  .bantr{
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;

    svg {
      margin-right: 15px;
    }
  }

  h3 {
    font-weight: 800;
    font-size: 1.2rem;
  }
`;

export const BottomContainer = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  a {
    will-change: transform;
    transition: transform .2s ease-in-out;

    &:hover{
      transform: translateY(-3px);
    }
  }
`;

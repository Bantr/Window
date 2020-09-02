import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }): string => theme.pb};
  box-shadow: -2px 14px 11px 0 ${({ theme }): string => (theme.dark ? `${theme.sb}CC` : `${theme.sb}77`)}; /* sb + 80% opacity (CC) */
  z-index: 1;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 30px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .bantr {
    svg {
      margin-right: 15px;
    }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
    margin-right: 25px;
    font-weight: 800;
    font-size: 1.4rem;
  }

`;
export const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 10px;
  }
`;

export const Avatar = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background-image: url(${({ url }): string => url ? url : 'none'});
  background-position: center;
  background-size: cover;
  margin: 0 10px 0 25px;
  border-radius: 50%;
  cursor: pointer;

  &.placeholder {
    border-radius: 50%;
  }
`;

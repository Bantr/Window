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
  padding: 0 50px 25px 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .bantr {
    display: flex;
    justify-content: flex-start;
    width: 250px;
    padding-left: 25px;
    margin-right: 25px;
  }
`;
export const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icon-container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 10px;
    transition: transform .2s ease-in-out;
    &:hover{
         transform: translateY(-5px);
      }
    }
`;

export const Avatar = styled.div<{ url: string }>`
  position: relative;
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

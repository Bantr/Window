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
    justify-content: center;
    width: 250px;
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

export const UserDropDown = styled.nav<{ visible: boolean }>`
  position: absolute;
  top: 70px;
  left: -100px;
  right: 0;
  margin: 0 auto;
  width: calc(150px - 10px);
  background-color: ${({ theme }): string => theme.pb};
  height: 100px;
  transition: 0.15s transform ease-in-out;
  border-radius: 5px;
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  box-shadow: 0 12px 11px ${({ theme }): string => theme.shadow}4D, 0 19px 4px ${({ theme }): string => theme.shadow}38;
  opacity: ${({ visible }): number => (visible ? 1 : 0)};
  visibility: ${({ visible }): string => (visible ? 'visible' : 'hidden')};
  transform: ${({ visible }): string => (visible ? 'translateY(0px)' : 'translateY(15px)')};
`;

export const DropDownItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 30px;
  margin: 10px 0;
  align-items: center;

  .inner {
    display: flex;
    align-items: center;
  }

  .dropdown-icon {
    margin-right: 10px;
  }
`;

export const Line = styled.div`
  content: '';
  position: absolute;
  left: -13px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 25px;
  width: 6px;
  border-radius: 2px;
  background-color: ${({ theme }): string => theme.p};
`;

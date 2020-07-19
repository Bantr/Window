import * as React from 'react';
import { Person, LogOut } from 'lib/icons';
import { DropDownItem, Line, UserDropDown } from './style';
import { authenticationService } from 'lib/services';
import { useSnackbar } from 'notistack';
import { routingService } from 'lib/services';

export const UserNav: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  function logOut(): void {
    authenticationService.logout().then((isLoggedOut: boolean) => {
      if (isLoggedOut) {
        enqueueSnackbar('Successfully logged out', { variant: 'success' });
        setTimeout(() => {
          location.pathname = '/';
        }, 2000);
      } else {
        enqueueSnackbar('Could not log out. Please try again!');
      }
    });
  }
  return (
    <UserDropDown>
      <DropDownItem onClick={(): void => { routingService.navigate('/csgo/profile'); }}>
        <Person
          className="dropdown-icon"
          pointer
          scale={1.2}
        />
        <Line />
        <div> Profile</div>
      </DropDownItem>
      <DropDownItem onClick={logOut}>
        <div className="inner">
          <LogOut
            className="dropdown-icon"
            data-cy="logOut"
            pointer
            scale={1.2}
          />
          Logout
        </div>
      </DropDownItem>
    </UserDropDown>
  );
};

import * as React from 'react';
import { Person, LogOut } from 'lib/icons';
import { useNavigate } from 'react-router-dom';
import { DropDown, Line, DropDownItem } from './style';
import { authenticationService } from 'lib/services';
import { UserContext } from 'lib/context';
import { useSnackbar } from 'notistack';
import { useApolloClient } from '@apollo/client';

export const ProfileDropDown: React.FC = () => {
  const apolloClient = useApolloClient();
  const { userData } = React.useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  function logOut(): void {
    authenticationService.logout(apolloClient).then((isLoggedOut: boolean) => {
      if (isLoggedOut) {
        enqueueSnackbar('Successfully logged out.', { variant: 'success' });
        /* add some time to show the message */
        setTimeout(() => {
          // Should be via location href. Otherwise the route isn't refreshed (do not change to navigate()).
          window.location.href = '/';
        }, 2000);
      } else {
        enqueueSnackbar('Could not log out. Please try again!');
      }
    });
  }
  return (
    <DropDown>
      <DropDownItem onClick={(): void => { navigate(`/csgo/profile/${userData.steamId}`); }}>
        <Person
          pointer
          scale={1.2}
        />
        <Line />
        <div> Profile</div>
      </DropDownItem>
      <DropDownItem onClick={logOut}>
        <div className="inner">
          <LogOut
            data-cy="logOut"
            pointer
            scale={1.2}
          />
          Logout
        </div>
      </DropDownItem>
    </DropDown>
  );
};

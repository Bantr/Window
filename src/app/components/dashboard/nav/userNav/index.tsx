import * as React from 'react';
import { Link } from '@reach/router';
import { Person, LogOut } from 'lib/icons';
import { DropDownItem, Line, UserDropDown } from './style';
import { AuthenticationService } from 'lib/services';

export const UserNav: React.FC<{}> = () => {
  const _authenticationService = new AuthenticationService();
  return (
    <UserDropDown>
      <DropDownItem>
        <Person
          className="dropdown-icon"
          pointer
          scale={1.2}
        />
        <Line />
        <Link to="/csgo/profile">Profile</Link>
      </DropDownItem>
      <DropDownItem>
        <div
          className="inner"
          onClick={(): void => {
            _authenticationService.logout();
          }}>
          <LogOut
            className="dropdown-icon"
            pointer
            scale={1.2}
          />
       Logout
        </div>
      </DropDownItem>
    </UserDropDown>
  );
};

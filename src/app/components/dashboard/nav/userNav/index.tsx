import * as React from 'react';
import { Link } from '@reach/router';
import { Person, LogOut } from 'lib/icons';
import { DropDownItem, Line, UserDropDown } from './style';
import { authenticationService } from 'lib/services';

export const UserNav: React.FC<{}> = () => (
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
          authenticationService.logout();
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

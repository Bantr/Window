import * as React from 'react';
import {
  Avatar,
  Container,
  Nav,
  NavigationList,
  StyledLink
} from './style';
import { routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import { Button, Logo } from 'lib/components';
import { UserContext } from 'lib/context';

export const Header: React.FC = () => {
  const { userData } = React.useContext(UserContext);

  function login(): void {
    routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo/dashboard`);
  }
  function open(): void {
    routingService.navigate('/csgo/dashboard');
  }

  return (
    <Container>
      <Nav>
        <StyledLink to="/">
          <Logo size={45} /> Bantr
        </StyledLink>
        <NavigationList>
          <a href="#">Bans</a>
          <a href="#">Statistics | soon</a>
          <Button
            className="resize-transition"
            data-cy="login"
            onClick={userData && userData.id ? open : login}
          >
            {userData && userData.id ?
              <React.Fragment><Avatar url={userData.steamAvatar} /> Open Dashboard</React.Fragment>
              :
              <React.Fragment> Sign in with Steam </React.Fragment>
            }
          </Button>
        </NavigationList>
      </Nav>
    </Container>
  );
};

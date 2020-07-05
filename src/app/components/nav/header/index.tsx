import * as React from 'react';
import {
  Avatar,
  Container,
  Nav,
  NavigationList,
  StyledLink
} from './style';
import { httpService, routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import { Button } from 'lib/components';
import { Logo } from 'lib/components';
import { UserContext } from 'lib/hooks';

export const Header: React.FC = () => {
  const [isConnected, setConnected] = React.useState(false);
  const { userData } = React.useContext(UserContext);

  React.useEffect(() => {
    // check if session exists
    httpService.get('/auth/session').then((res) => {
      res.ok ? setConnected(true) : null;
    });
  }, []);

  function signIn(): void {
    routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo`);
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
          <Button className="resize-transition" onClick={isConnected ? open : signIn}>
            {isConnected ?
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

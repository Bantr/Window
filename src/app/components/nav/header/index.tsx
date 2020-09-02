import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Container,
  Nav,
  NavigationList,
  StyledLink
} from './style';
import { routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';
import { Button, Logo, VersionTag } from 'lib/components';
import { UserContext } from 'lib/context';
import { Steam } from 'lib/icons';

export const Header: React.FC = () => {
  const { userData } = React.useContext(UserContext);
  const navigate = useNavigate();

  function login(): void {
    routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.protocol}//${window.location.hostname}/csgo/dashboard`);
  }
  function open(): void {
    navigate('/csgo/dashboard');
  }

  return (
    <Container>
      <Nav>
        <StyledLink to="/">
          <Logo size={45} /> Banter <VersionTag />
        </StyledLink>
        <NavigationList>
          <a href="#">Bans</a>
          <a href="#">Statistics | soon</a>
          <Button
            className="resize-transition"
            data-cy="login"
            icon={userData && userData.id ? null : <Steam pointer />}
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

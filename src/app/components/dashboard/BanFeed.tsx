import * as React from 'react';
import styled from 'styled-components';
import { Title } from 'lib/components';
import { Spinner } from 'lib/icons';
// import { HttpService } from 'lib/services';

interface IContainerProps {
  w: number;
}

const Container = styled.div<IContainerProps>`
  background-color: ${({ theme }): string => theme.pb};
  border-radius: 10px;
  width: ${({ w }): number => w}px;
  position: relative;
  box-shadow: 0 19px 38px ${({ theme }): string => theme.shadow}4D, 0 15px 12px ${({ theme }): string => theme.shadow}38;
`;
const SettingsContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }): string => theme.sb};
`;

const Feed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  height: 320px;
  color: ${({ theme }): string => theme.t};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface IProps {
  width?: number;
}

export const BanFeed: React.FC<IProps> = ({ width = 300 }) => {
  const [bans, setBans] = React.useState(0);
  //const _httpService = new HttpService();

  async function fetchBans(): Promise<{ [key: string]: any }> {
    //const resp = await _httpService.get('/bans');
    // const json = await resp.json();
    // return json;
    return new Promise((resolve) => {
      resolve({ number: 500 });
    });
  }

  React.useEffect(() => {
    fetchBans()
      .then((res: { [key: string]: any }) => {
        setBans(res.number);
      })
      .catch(e => (e.message ? new Error(e) : new Error('api call failed')));
  }, []);

  return (
    <Container w={width}>
      <SettingsContainer>
        <Inner>
          <Title size="large" type="h2">
            Total Bans tracked
          </Title>
        </Inner>
      </SettingsContainer>
      <React.Suspense fallback={Spinner}>
        <Feed>{bans}</Feed>
      </React.Suspense>
    </Container>
  );
};

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { SteamButton } from 'lib/components';

interface IProps extends RouteComponentProps {
  path: string;
}
export const Landing: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Homepage</title>
    </Helmet>
    <SteamButton />
  </div>
);

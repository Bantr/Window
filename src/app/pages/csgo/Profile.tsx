import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Helmet } from 'react-helmet';
import { Construction } from 'lib/components';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Profile: React.FC<IProps> = () => (
  <>
    <Helmet>
      <title>CSGO | Profile</title>
    </Helmet>
    <Construction />
  </>
);

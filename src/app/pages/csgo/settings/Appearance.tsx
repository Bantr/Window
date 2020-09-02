import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from 'lib/components';
import { InnerSettings } from './InnerSettings';
import { Theme } from '../../../views/settings/appearance/theme';

export const Appearance: React.FC = () => (
  <div>
    <Helmet>
      <title>Settings | Appearance</title>
      <meta content="Change Bantr's appearance according to your own needs. Choose from a list of existing themes or create a custom theme!" name="description" />
    </Helmet>
    <Title size="large" type="h3">Appearance</Title>
    <InnerSettings>
      <Theme />
    </InnerSettings>
  </div>
);

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { Playground as PrismaPlayground, store } from 'graphql-playground-react';
import { bantrSettings } from 'lib/settings';
import { RouteComponentProps } from '@reach/router';
import { UserContext } from 'lib/hooks';

const settings = {
  'editor.theme': 'dark',
  'schema.polling.enable': false,
  'tracing.tracingSupported': false,
  'tracing.hideTracingResponse': true
};

export const Playground: React.FC<RouteComponentProps> = () => {
  const { userData } = React.useContext(UserContext);

  const headers = {
    'bantr-graphql': userData.graphQLKey
  };

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700"
          rel="stylesheet"
        />
      </Helmet>
      <Provider store={store}>
        <PrismaPlayground
          endpoint={bantrSettings.graphQLEndpoint}
          headers={headers}
          settings={settings}
        />
      </Provider>
    </>
  );
};

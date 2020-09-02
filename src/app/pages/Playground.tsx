import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { Playground as PrismaPlayground, store } from 'graphql-playground-react';
import { bantrSettings } from 'lib/settings';
import { UserContext } from 'lib/context';

const settings = {
  'editor.theme': 'dark',
  'schema.polling.enable': false,
  'tracing.tracingSupported': false,
  'tracing.hideTracingResponse': true
};

export const Playground: React.FC = () => {
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
        <title>GraphQL Playground</title>
        <meta content="Play around with our beautifully designed GraphQL api. Want to benefit from our api? Contact us! " name="description" />
      </Helmet>
      <Provider store={store}>
        <PrismaPlayground
          endpoint={`https://${bantrSettings.graphQLEndpoint}`}
          headers={headers}
          settings={settings}
        />
      </Provider>
    </>
  );
};

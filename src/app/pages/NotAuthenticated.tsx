import * as React from 'react';
import { Helmet } from 'react-helmet';
import { routingService } from 'lib/services';
import { bantrSettings } from 'lib/settings';

export const NotAuthenticated: React.FC = () => {
  React.useEffect(() => {
    setTimeout(() => {
      routingService.navigateExternal(`${bantrSettings.apiRoot}/auth/steam?redirectTo=${window.location.href}`);
    }, 2000);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Error 403</title>
      </Helmet>
      <h1>You are not authenticated</h1>
      <p>Redirecting to login page.</p>
    </div >
  );
};

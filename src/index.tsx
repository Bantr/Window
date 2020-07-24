import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isDevelopment } from 'lib/util';
import { bantrSettings } from 'lib/settings';
import App from './app/App';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/apm';

import * as whyDidYouRender from '@welldone-software/why-did-you-render';

// Sentry should only throw errors in production.
if (!isDevelopment()) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: `${bantrSettings.clientAppName}-v${bantrSettings.clientAppVersion}`,
    integrations: [
      new Integrations.Tracing({ tracingOrigins: ['api.bantr.app'] })
    ],
    tracesSampleRate: 0.2 // catches 20% of calls
  });
} else {
  // Helps to find unnecessary renders
} else {
  whyDidYouRender.default(React, { trackAllPureComponents: true });
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

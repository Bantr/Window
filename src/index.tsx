import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isDevelopment } from 'lib/util';
import { bantrSettings } from 'lib/settings';
import { App } from './app/App';

// should become lazy loaded
import * as Sentry from '@sentry/browser';
import * as whyDidYouRender from '@welldone-software/why-did-you-render';

// Sentry should only throw errors in production.
// TODO: helper function for process env
if (!isDevelopment()) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: `${bantrSettings.clientAppName}${bantrSettings.clientAppVersion}`
  });
}

if (isDevelopment()) {
  whyDidYouRender.default(React, { trackAllPureComponents: true });
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

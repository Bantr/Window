import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { isDevelopment } from 'lib/util';
import { App } from './app/App';

// Sentry should only throw errors in production.
// TODO: helper function for process env
if (!isDevelopment()) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

import * as React from 'react';
import { Container } from './style';

/*
  this is a fallback component using Sentries error boundaries:
  https://docs.sentry.io/platforms/javascript/react/
*/
export const ErrorFallback: React.FC = () => (
  <Container>
    <h1>Sorry, it&apos;s not you. it&apos;s us</h1>
    <p>An unexpected error occurred</p>
  </Container>
);

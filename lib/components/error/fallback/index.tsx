import * as React from 'react';
import { Container } from './style';
import { Button } from 'lib/components';
import { Link } from '@reach/router';
/*
  this is a fallback component using Sentries error boundaries:
  https://docs.sentry.io/platforms/javascript/react/
*/
export const ErrorFallback: React.FC = () => (
  <Container>
    <h1>Sorry, it&apos;s not you. it&apos;s us</h1>
    <p>An unexpected error occurred</p>
    <Button><Link to="/dashboard">Home</Link></Button>
  </Container>
);

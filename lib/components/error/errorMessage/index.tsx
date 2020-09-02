import * as React from 'react';
import { Container } from './style';
import { AlertTriangle } from 'lib/icons';
import { ApolloError } from '@apollo/client';
import { ERROR_MESSAGES } from 'lib/enums';
import * as Sentry from '@sentry/react';

interface IProps {
  message: string | ERROR_MESSAGES;
  error: ApolloError;
  /* closable?: boolean;*/
}
export const ErrorMessage: React.FC<IProps> = ({ error, message /*, closable = true*/ }) => {
  React.useEffect(() => {
    if (error) {
      Sentry.captureException(error);
    }
  }, []);

  return (
    /*  const [visible, setVisible] = React.useState(true);*/
    <Container animate={{ height: '100%' }} isVisible={true} transition={{ type: 'spring', damping: 100, mass: 0.5 }}>
      <AlertTriangle fill="white" scale={.9} />
      {message}
      {/* closable ? <Plus onClick={(): void => { setVisible(false); }} pointer rotate={45} /> : null*/}
    </Container>
  );
};

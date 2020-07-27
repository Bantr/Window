import * as React from 'react';
import { Container } from './style';
import { AlertTriangle } from 'lib/icons';

interface IProps {
  message: string;
  /* closable?: boolean;*/
}
export const ErrorMessage: React.FC<IProps> = ({ message /*, closable = true*/ }) => (
  /*  const [visible, setVisible] = React.useState(true);*/
  <Container animate={{ height: '100%' }} isVisible={true} transition={{ type: 'spring', damping: 100, mass: 0.5 }}>
    <AlertTriangle scale={.9} />
    <p>{message}</p>
    {/* closable ? <Plus onClick={(): void => { setVisible(false); }} pointer rotate={45} /> : null*/}
  </Container>
);

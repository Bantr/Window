import * as React from 'react';
import { Logo } from '../logo';
import { Link } from '@reach/router';
import { Container } from './style';

interface IProps {
  to?: string;
  logoSize?: number;
}
export const NameAndLogo: React.FC<IProps> = ({ to, logoSize }) => {
  const content = (
    <Container>
      <Logo size={logoSize ? logoSize : undefined} />
      <h2 className={to ? 'pointer' : ''}>Bantr</h2>
    </Container>
  );
  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  return content;
};

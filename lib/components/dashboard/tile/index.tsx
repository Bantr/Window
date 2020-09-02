import * as React from 'react';
import { Button, Title } from 'lib/components';
import { Container, LinkContainer } from './style';

interface IProps {
  loading?: boolean;
  title: string;
  to?: string;
  linkText?: string;
}

export const Tile: React.FC<IProps> = ({ loading = false, title, to, linkText }) => {
  if (loading) {
    return (<Container className="placeholder" />);
  }

  return (
    <Container>
      <Title size="huge" type="h3">{title}</Title>
      {linkText && to ? <LinkContainer><Button to={to} variant="outline">{linkText}</Button></LinkContainer> : null}
    </Container>
  );
};

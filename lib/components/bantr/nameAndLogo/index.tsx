import * as React from 'react';
import { Link } from '@reach/router';
import { Container, Logo } from './style';

interface IProps {
  to?: string;
}
export const NameAndLogo: React.FC<IProps> = ({ to }) => {
  const content = (
    <Container>
      <Logo viewBox="0 0 58.103 77.999">
        <path className="block1" d="M0,22.7,22.545,12.126l9.7,55.3L9.7,78Z" />
        <path className="block2" d="M25.861,10.572,48.406,0l9.7,55.3L35.558,65.873Z" />
      </Logo>
      <h2>Bantr</h2>
    </Container>
  );
  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  return content;
};

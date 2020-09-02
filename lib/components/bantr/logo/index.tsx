import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Svg = styled.svg`
  cursor: pointer;
  .primary{
    fill: ${({ theme }): string => theme.p};
  }
  .secondary{
    fill: ${({ theme }): string => theme.s};
  }
`;

interface IProps {
  to?: string;
  size?: number;
}
export const Logo: React.FC<IProps> = ({ to, size = 45 }) => {
  const content = (
    <Svg height={size} viewBox="0 0 110 139" width={size}>
      <rect className="primary" height="100" rx="10" width="30" />
      <rect className="primary" height="80" rx="10" width="30" x="40" y="59" />
      <rect className="secondary" height="66" rx="10" width="30" x="80" y="33" />
    </Svg>);

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  return content;
};

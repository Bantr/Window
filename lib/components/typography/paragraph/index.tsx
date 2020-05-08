import * as React from 'react';
import { P } from './style';

export const Paragraph: React.FC<{}> = ({ children }) => (
  <P>{children}</P>
);

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';

interface IProps extends RouteComponentProps {
  path: string;
}
export const TermsOfUse: React.FC<IProps> = () => (
  <div>
    <Helmet>
      <title>Terms of Use</title>
    </Helmet>
    Terms of use page
  </div>
);

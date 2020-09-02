import * as React from 'react';
import { Route } from 'react-router-dom';
import { NotAuthenticated, AppLoad } from '../../pages';
import { authenticationService } from 'lib/services';

interface IProps {
  element: React.ReactElement | null;
  path: string;
}

export const AuthenticatedRoute: React.FC<IProps> = ({ element, path }) => {
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);
  const [loading, isLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    authenticationService.isAuthenticated().then((session) => {
      if (session && session.id) {
        setAuthenticated(true);
      }
      isLoading(false);
    });
  });

  if (loading) {
    return <Route element={<AppLoad />} path={path} />;
  }

  if (isAuthenticated) {
    return (<Route element={element} path={path} />);
  }

  return <Route element={<NotAuthenticated />} path={path} />;
};

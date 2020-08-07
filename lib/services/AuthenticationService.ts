import { IUserData } from 'lib/context';
import { httpService } from 'lib/services';

class AuthenticationService {
  public async isAuthenticated(refresh?: boolean): Promise<IUserData> {
    const session = window.sessionStorage.getItem('userSession');

    if (!session || refresh) {
      const response = await httpService.get('/auth/session');
      if (response.ok) {
        const jsonResult = await response.json();
        const stringResult = JSON.stringify(jsonResult);
        window.localStorage.setItem('hasBeenAuthenticatedBefore', JSON.stringify(true));
        window.sessionStorage.setItem('userSession', stringResult);
        return jsonResult;
      }
      return null;
    }
    return await JSON.parse(session);
  }

  public async logout(): Promise<boolean> {
    const response = await httpService.get('/auth/logout');
    if (response.ok) {
      window.sessionStorage.clear();
      return true;
    }
    return false;
  }
}

export const authenticationService = new AuthenticationService();

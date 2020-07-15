import { IUserData } from 'lib/hooks';
import { httpService, routingService } from 'lib/services';

class AuthenticationService {
  public async isAuthenticated(): Promise<IUserData> {
    const session = window.sessionStorage.getItem('userSession');

    if (!session) {
      const response = await httpService.get('/auth/session');
      if (response.ok) {
        const jsonResult = await response.json();
        const stringResult = JSON.stringify(jsonResult);
        window.sessionStorage.setItem('userSession', stringResult);
        return jsonResult;
      }
      return null;
    }
    return await JSON.parse(session);
  }

  public async logout(): Promise<void> {
    const result = await httpService.get('/auth/logout');
    if (result.ok) {
      routingService.navigate('/');
    }
  }
}

export const authenticationService = new AuthenticationService();

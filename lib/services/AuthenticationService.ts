import { IUserData } from 'lib/hooks';
import { httpService, routingService } from 'lib/services';

class AuthenticationService {
  public async isAuthenticated(): Promise<IUserData> {
    const result = await httpService.get('/auth/session');
    if (!result.ok) {
      routingService.navigate('/');
    }
    return await result.json();
  }

  public async logout(): Promise<void> {
    const result = await httpService.get('/auth/logout');
    if (result.ok) {
      routingService.navigate('/');
    }
  }
}

export const authenticationService = new AuthenticationService();

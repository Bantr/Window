import { IUserData } from 'lib/hooks';
import { httpService, RoutingService } from 'lib/services';

export class AuthenticationService {
  private _routingService: RoutingService
  constructor() {
    this._routingService = new RoutingService();
  }

  public async isAuthenticated(): Promise<IUserData> {
    const result = await httpService.get('/auth/session');
    if (!result.ok) {
      this._routingService.navigate('/');
    }
    return await result.json();
  }

  public async logout(): Promise<void> {
    const result = await httpService.get('/auth/logout');
    if (result.ok) {
      this._routingService.navigate('/');
    }
  }
}

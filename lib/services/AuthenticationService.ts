import { IUserData } from 'lib/hooks';
import { HttpService, RoutingService } from 'lib/services';

export class AuthenticationService {
  private _httpService: HttpService
  private _routingService: RoutingService
  constructor() {
    this._httpService = new HttpService();
    this._routingService = new RoutingService();
  }

  public async isAuthenticated(): Promise<IUserData> {
    const result = await this._httpService.get('/auth/session');
    if (!result.ok) {
      this._routingService.navigate('/');
    }
    return await result.json();
  }

  public async logout(): Promise<void> {
    const result = await this._httpService.get('/auth/logout');
    if (result.ok) {
      this._routingService.navigate('/');
    }
  }
}

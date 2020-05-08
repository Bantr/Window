import { IAppSettings } from './AppSettings';

export class BantrSettings implements IAppSettings {
  public clientAppId = 'app_id_here'

  // TODO: helper function apiroot (check if exist);
  public apiRoot = process.env.API_ROOT ? process.env.API_ROOT : 'http://localhost:3000';
  public clientAppName = 'Bantr';

  // TODO: Not set automatically yet.
  public clientAppVersion = '1.0.0.0';
  public clientBuildVersion = '1.0.0';
  private _currentAppId = 'not-set-yet';

  public faceitApiRoot = 'https://open.faceit.com/data/v4/';
  public faceitApiKey = process.env.FACEIT_API_KEY;

  public get currentAppId(): string {
    return this._currentAppId || this.clientAppId;
  }
}

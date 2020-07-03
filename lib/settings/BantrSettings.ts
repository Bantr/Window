import { IAppSettings } from './AppSettings';

class BantrSettings implements IAppSettings {
  public clientAppId = 'app_id_here'

  // TODO: helper function apiroot (check if exist);
  public apiRoot = process.env.API_ROOT ? process.env.API_ROOT : 'http://localhost:3000';

  public clientAppName = process.env.npm_package_name;
  public clientAppVersion = process.env.npm_package_version;
  public faceitApiRoot = 'https://open.faceit.com/data/v4/';
  public faceitApiKey = process.env.FACEIT_API_KEY;
}

export const bantrSettings = new BantrSettings();

import { BantrSettings } from 'lib/settings';

export class HttpService {
  private _bantrSettings = new BantrSettings()

  public get(path: string): Promise<Response> {
    return fetch(`${this._bantrSettings.apiRoot}${path}`, {
      method: 'GET',
      credentials: 'include'
    });
  }

  public post(path: string, data?: any): Promise<Response> {
    return fetch(`${this._bantrSettings.apiRoot}${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
  }
}

import { bantrSettings } from 'lib/settings';

class HttpService {
  public get(path: string): Promise<Response> {
    return fetch(`${bantrSettings.apiRoot}${path}`, {
      method: 'GET',
      credentials: 'include'
    });
  }

  public post(path: string, data?: any): Promise<Response> {
    return fetch(`${bantrSettings.apiRoot}${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
  }
}

export const httpService = new HttpService();

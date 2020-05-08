import { BantrSettings } from 'lib/settings';

export class FaceitService {
  private _bantrSettings = new BantrSettings();

  public getPlayerInfo(gamePlayerId: string): Promise<Response> {
    return fetch(`${this._bantrSettings.faceitApiRoot}/players?game_player_id=${gamePlayerId}`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': this._bantrSettings.faceitApiKey
      })
    });
  }
}

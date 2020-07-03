import { bantrSettings } from 'lib/settings';

export class FaceitService {
  public getPlayerInfo(gamePlayerId: string): Promise<Response> {
    return fetch(`${bantrSettings.faceitApiRoot}/players?game_player_id=${gamePlayerId}`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': bantrSettings.faceitApiKey
      })
    });
  }
}

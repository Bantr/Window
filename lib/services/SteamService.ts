class SteamService {
  public validateUsername(username: string, maxLength = 20): string {
    if (!username) { throw new Error('Username was not found.'); }

    if (username.length > maxLength) {
      return `${username.substring(0, maxLength)}..`;
    }
    return username;
  }
}
export const steamService = new SteamService();

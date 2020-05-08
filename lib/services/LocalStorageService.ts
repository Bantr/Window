export class LocalStorageService {
  clear(): void {
    localStorage.clear();
  }

  getItem(key: string): any {
    if (!localStorage) return;
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error(`Error getting item ${key} from localStorage`, err);
    }
  }

  storeItem(key: string, item: any): void {
    if (!localStorage) return;
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
      console.error(`Error storing item ${key} to localStorage`, err);
    }
  }

  removeItem(key: string): void {
    if (!localStorage) return;
    try {
      return localStorage.removeItem(key);
    } catch (err) {
      console.error(`Error removing item ${key} from localStorage`, err);
    }
  }
}

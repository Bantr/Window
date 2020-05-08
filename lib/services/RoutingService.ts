import { navigate as reachNavigate } from '@reach/router';

export class RoutingService {
  navigate(path: string): void {
    reachNavigate(path);
  }
  navigateExternal(path: string): void {
    window.location.href = path;
  }
}

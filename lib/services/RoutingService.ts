import { navigate as reachNavigate } from '@reach/router';

class RoutingService {
  navigate(path: string): void {
    reachNavigate(path);
  }
  navigateExternal(path: string): void {
    window.location.href = path;
  }
}

export const routingService = new RoutingService();

class RoutingService {
  navigateExternal(path: string): void {
    window.location.href = path;
  }
}

export const routingService = new RoutingService();

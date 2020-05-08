export function isDevelopment(): boolean {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV === 'development' ? true : false;
  }
}

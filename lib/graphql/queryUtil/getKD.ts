export function getKD(kills: number, deaths: number): string {
  if (deaths === 0) {
    return kills.toString();
  }
  if (kills === 0) { // Highly likely he didn't play yet.
    return '1';
  }
  return (kills / deaths).toFixed(2);
}

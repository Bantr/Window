import { DateTime } from 'luxon';

export function timeAgo(ISO: string): string {
  const time = DateTime.fromISO(ISO);
  const timeAgo = time.diffNow('seconds', { conversionAccuracy: 'longterm' }).as('seconds');
  const seconds = Math.round(Math.abs(timeAgo));

  if (seconds < 60) {
    return `${seconds}s ago`;
  }
  if (seconds > 60 && seconds < 3600) {
    return `${Math.round((seconds / 60))}m ago`;
  }
  if (seconds > 3600 && seconds < 86400) {
    return `${Math.round((seconds / 60 / 60))}h ago`;
  }
  if (seconds > 86400 && seconds < 2592000) {
    const days = Math.round((seconds / 60 / 60 / 24));
    return `${days} ${days > 1 ? 'days' : 'day'} ago`;
  }
  if (seconds > 2592000 && seconds < 31536000) {
    const months = Math.round((seconds / 60 / 60 / 24 / 30));
    return `${months} ${months > 1 ? 'months' : 'month'} ago`;
  }

  const years = Math.round((seconds / 60 / 60 / 24 / 365));
  return `${years} ${years > 1 ? 'years' : 'year'} ago`;
}

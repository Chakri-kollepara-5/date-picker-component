import { Frequency, CustomPattern } from '../../store/recurrenceStore';

export function getRecurringDates({
  frequency,
  interval,
  daysOfWeek,
  customPattern,
  startDate,
  endDate,
}: {
  frequency: Frequency;
  interval: number;
  daysOfWeek: number[];
  customPattern?: CustomPattern;
  startDate: string;
  endDate?: string;
}) {
  const results: string[] = [];
  let current = new Date(startDate);
  const limit = endDate ? new Date(endDate) : new Date(startDate);
  if (!endDate) limit.setMonth(limit.getMonth() + 3); // Preview up to 3 months by default

  while (current <= limit && results.length < 100) {
    if (frequency === 'daily') {
      results.push(current.toISOString().slice(0, 10));
      current.setDate(current.getDate() + interval);
    } else if (frequency === 'weekly') {
      for (const day of daysOfWeek.length ? daysOfWeek : [current.getDay()]) {
        const next = new Date(current);
        next.setDate(current.getDate() + ((day - current.getDay() + 7) % 7));
        if (next <= limit && next >= new Date(startDate)) {
          results.push(next.toISOString().slice(0, 10));
        }
      }
      current.setDate(current.getDate() + 7 * interval);
    } else if (frequency === 'monthly') {
      if (customPattern) {
        // The Nth weekday of month
        const month = current.getMonth();
        const year = current.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const date = 1 + ((7 + customPattern.dayOfWeek! - firstDay) % 7) + 7 * (customPattern.weekOfMonth! - 1);
        const dt = new Date(year, month, date);
        if (dt >= new Date(startDate) && dt <= limit) {
          results.push(dt.toISOString().slice(0, 10));
        }
      } else {
        results.push(current.toISOString().slice(0, 10));
      }
      current.setMonth(current.getMonth() + interval);
    } else if (frequency === 'yearly') {
      results.push(current.toISOString().slice(0, 10));
      current.setFullYear(current.getFullYear() + interval);
    }
  }
  return [...new Set(results)].filter(d => d >= startDate && (!endDate || d <= endDate));
}

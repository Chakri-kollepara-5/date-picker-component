import { useRecurrenceStore } from '../../store/recurrenceStore';
import { getRecurringDates } from './recurrenceUtils';

export default function CalendarPreview() {
  const { frequency, interval, daysOfWeek, customPattern, startDate, endDate } = useRecurrenceStore();
  const dates = getRecurringDates({ frequency, interval, daysOfWeek, customPattern, startDate, endDate });

  if (!startDate) return null;

  // Simple preview: show first 12 occurrences as a grid
  return (
    <div>
      <div className="font-medium mb-2">Upcoming Occurrences:</div>
      <div className="grid grid-cols-4 gap-2">
        {dates.slice(0, 12).map(date => (
          <div key={date} className="bg-green-200 rounded text-center py-1 px-2">{date}</div>
        ))}
      </div>
      {dates.length > 12 && <div className="mt-2 text-gray-500">...and {dates.length - 12} more</div>}
    </div>
  );
}

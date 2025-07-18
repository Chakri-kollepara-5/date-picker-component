import { useRecurrenceStore } from '../../store/recurrenceStore';

export default function DateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrenceStore();
  return (
    <div className="flex items-center space-x-4 mb-2">
      <div>
        <label className="mr-1 font-semibold">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="border rounded px-2"
        />
      </div>
      <div>
        <label className="mr-1 font-semibold">End Date</label>
        <input
          type="date"
          value={endDate || ''}
          onChange={e => setEndDate(e.target.value)}
          className="border rounded px-2"
        />
      </div>
    </div>
  );
}

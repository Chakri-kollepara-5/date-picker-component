import { useRecurrenceStore } from '../../store/recurrenceStore';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Customization() {
  const { frequency, interval, setInterval, daysOfWeek, setDaysOfWeek, setCustomPattern } = useRecurrenceStore();

  return (
    <div>
      <label className="mr-2">Every</label>
      <input
        type="number"
        min={1}
        value={interval}
        onChange={e => setInterval(Number(e.target.value))}
        className="w-16 px-1 mx-1 border rounded"
      />
      <span className="mr-4">{frequency === 'weekly' ? 'weeks' : frequency + 's'}</span>

      {frequency === 'weekly' && (
        <div className="mt-3 flex space-x-2">
          {dayNames.map((name, idx) => (
            <button
              key={idx}
              className={`px-2 py-1 rounded ${daysOfWeek.includes(idx) ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setDaysOfWeek(daysOfWeek.includes(idx)
                  ? daysOfWeek.filter(d => d !== idx)
                  : [...daysOfWeek, idx]
                );
              }}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      {frequency === 'monthly' && (
        <div className="mt-3">
          <label>
            <input
              type="checkbox"
              className="mr-2"
              onChange={e =>
                setCustomPattern(
                  e.target.checked
                    ? { weekOfMonth: 2, dayOfWeek: 2 } // Example: second Tuesday
                    : undefined
                )
              }
            />
            Pattern: The second Tuesday of the month (for demo)
          </label>
        </div>
      )}
    </div>
  );
}

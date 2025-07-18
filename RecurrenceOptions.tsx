import { useRecurrenceStore } from '../../store/recurrenceStore';

const FREQUENCIES = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
];

export default function RecurrenceOptions() {
  const { frequency, setFrequency } = useRecurrenceStore();

  return (
    <div className="flex items-center space-x-4">
      {FREQUENCIES.map(f => (
        <button
          key={f.value}
          onClick={() => setFrequency(f.value as any)}
          className={`px-4 py-2 rounded ${frequency === f.value ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

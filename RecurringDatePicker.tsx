import RecurrenceOptions from './RecurrenceOptions';
import Customization from './Customization';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

export default function RecurringDatePicker() {
  return (
    <div className="p-6 rounded-lg bg-white shadow-md space-y-6">
      <h2 className="text-xl font-bold mb-2">Recurring Date Picker</h2>
      <RecurrenceOptions />
      <Customization />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}

import { useState, useEffect } from 'react';

const AgeInputSection = ({ birthDate, setBirthDate, onCalculate, today }) => {
  // Local state for individual fields
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Parse birthDate when it changes from parent
  useEffect(() => {
    if (birthDate) {
      const parts = birthDate.split('-');
      if (parts.length === 3) {
        setYear(parts[0]);
        setMonth(parts[1]);
        setDay(parts[2]);
      }
    } else {
      setDay('');
      setMonth('');
      setYear('');
    }
  }, [birthDate]);

  const handleDateChange = (field, value) => {
    let newDay = day;
    let newMonth = month;
    let newYear = year;

    // Update the specific field
    if (field === 'day') {
      newDay = value;
      setDay(value);
    } else if (field === 'month') {
      newMonth = value;
      setMonth(value);
    } else if (field === 'year') {
      newYear = value;
      setYear(value);
    }

    // Update parent state if all fields have values
    if (newDay && newMonth && newYear) {
      // Pad day and month with leading zeros if needed
      const paddedDay = newDay.padStart(2, '0');
      const paddedMonth = newMonth.padStart(2, '0');
      const dateString = `${newYear}-${paddedMonth}-${paddedDay}`;
      setBirthDate(dateString);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onCalculate();
    }
  };

  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }
  ];
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="mb-10">
      <div className="mb-8">
        <label className="block text-lg md:text-xl font-medium text-gray-700 mb-6 px-4">
          Select your birth date:
        </label>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-full sm:max-w-md mx-auto px-4">
          {/* Day */}
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-sm text-gray-600 mb-2 text-center">Day</label>
            <select
              value={day}
              onChange={(e) => handleDateChange('day', e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full sm:min-w-[90px] px-4 py-3 text-base md:text-lg border-2 border-gray-200 rounded-xl bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-['Poppins'] text-center"
            >
              <option value="">Day</option>
              {days.map(day => (
                <option key={day} value={day.toString().padStart(2, '0')}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* Month */}
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-sm text-gray-600 mb-2 text-center">Month</label>
            <select
              value={month}
              onChange={(e) => handleDateChange('month', e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full sm:min-w-[140px] px-4 py-3 text-base md:text-lg border-2 border-gray-200 rounded-xl bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-['Poppins'] text-center"
            >
              <option value="">Month</option>
              {months.map(month => (
                <option key={month.value} value={month.value}>
                  {month.name}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-sm text-gray-600 mb-2 text-center">Year</label>
            <select
              value={year}
              onChange={(e) => handleDateChange('year', e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full sm:min-w-[110px] px-4 py-3 text-base md:text-lg border-2 border-gray-200 rounded-xl bg-white transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-['Poppins'] text-center"
            >
              <option value="">Year</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="px-4">
        <button
          onClick={onCalculate}
          className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-full hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-lg"
        >
          <span>Calculate Age</span>
          <span>🎂</span>
        </button>
      </div>
    </div>
  );
};

export default AgeInputSection;

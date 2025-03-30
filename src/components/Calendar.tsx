import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedStartDate: Date;
  selectedEndDate: Date;
  readonly?: boolean;
  onChangeClick?: () => void;
}

export function Calendar({ selectedStartDate, selectedEndDate, readonly = false, onChangeClick }: CalendarProps) {
  const currentDate = new Date();
  const [viewDate, setViewDate] = React.useState({
    month: selectedStartDate.getMonth(),
    year: selectedStartDate.getFullYear()
  });

  const goToPreviousMonth = () => {
    setViewDate(prev => ({
      year: prev.month === 0 ? prev.year - 1 : prev.year,
      month: prev.month === 0 ? 11 : prev.month - 1
    }));
  };

  const goToNextMonth = () => {
    setViewDate(prev => ({
      year: prev.month === 11 ? prev.year + 1 : prev.year,
      month: prev.month === 11 ? 0 : prev.month + 1
    }));
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const daysInMonth = getDaysInMonth(viewDate.month, viewDate.year);
  const firstDayOfMonth = getFirstDayOfMonth(viewDate.month, viewDate.year);

  const getPreviousMonthDays = (month: number, year: number) => {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);
    const firstDay = getFirstDayOfMonth(month, year);
    
    return Array.from({ length: firstDay }, (_, i) => ({
      day: daysInPrevMonth - firstDay + i + 1,
      month: prevMonth,
      year: prevYear
    }));
  };

  const getNextMonthDays = (month: number, year: number, firstDay: number, currentMonthDays: number) => {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const totalDays = firstDay + currentMonthDays;
    const remainingDays = 7 - (totalDays % 7);
    
    return Array.from({ length: remainingDays === 7 ? 0 : remainingDays }, (_, i) => ({
      day: i + 1,
      month: nextMonth,
      year: nextYear
    }));
  };

  const previousMonthDays = getPreviousMonthDays(viewDate.month, viewDate.year);
  const nextMonthDays = getNextMonthDays(viewDate.month, viewDate.year, firstDayOfMonth, daysInMonth);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const isDateInRange = (day: number, month: number, year: number) => {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    
    const start = new Date(selectedStartDate.getFullYear(), selectedStartDate.getMonth(), selectedStartDate.getDate());
    const end = new Date(selectedEndDate.getFullYear(), selectedEndDate.getMonth(), selectedEndDate.getDate());
    
    return date >= start && date <= end;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={goToPreviousMonth}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h4 className="text-lg font-semibold text-gray-900">
          {monthNames[viewDate.month]} {viewDate.year}
        </h4>
        <button 
          onClick={goToNextMonth}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {previousMonthDays.map(({ day, month, year }) => (
          <div
            key={`prev-${day}`}
            className={`
              h-8 flex items-center justify-center text-sm rounded-full
              ${isDateInRange(day, month, year) ? 'bg-[#006CE4] text-white' : 'text-gray-400'}
            `}
          >
            {day}
          </div>
        ))}

        {days.map(day => {
          const date = new Date(viewDate.year, viewDate.month, day);
          const isSelected = isDateInRange(day, viewDate.month, viewDate.year);
          const isToday = date.toDateString() === currentDate.toDateString();

          return (
            <div
              key={`day-${day}`}
              className={`
                h-8 flex items-center justify-center text-sm rounded-full transition-all
                ${isSelected ? 'bg-[#006CE4] text-white' : ''}
                ${isToday && !isSelected ? 'border border-[#006CE4] text-[#006CE4]' : ''}
                ${!isSelected ? 'text-gray-700' : ''}
              `}
            >
              {day}
            </div>
          );
        })}

        {nextMonthDays.map(({ day, month, year }) => (
          <div
            key={`next-${day}`}
            className={`
              h-8 flex items-center justify-center text-sm rounded-full
              ${isDateInRange(day, month, year) ? 'bg-[#006CE4] text-white' : 'text-gray-400'}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarContainer, CalendarWrapper } from './styled';

export interface CalendarProps {
  /** Initial selected date (YYYY-MM-DD format) */
  initialDate?: string;
  /** Array of enabled dates (YYYY-MM-DD format) */
  enabledDates?: string[];
  /** Minimum selectable date (YYYY-MM-DD format) */
  minDate?: string;
  /** Maximum selectable date (YYYY-MM-DD format) */
  maxDate?: string;
  /** Whether calendar is disabled */
  disabled?: boolean;
  /** Custom className for styling */
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  initialDate,
  enabledDates = [],
  minDate,
  maxDate,
  disabled = false,
  className,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'days' | 'months' | 'years'>('days');
  const datePickerRef = useRef<DatePicker>(null);

  // Initialize selected date
  useEffect(() => {
    if (initialDate) {
      const date = moment(initialDate, 'YYYY-MM-DD').toDate();
      setSelectedDate(date);
    }
  }, [initialDate]);

  // Convert enabled dates to Date objects
  const enabledDatesSet = new Set(enabledDates);
  const minDateObj = minDate
    ? moment(minDate, 'YYYY-MM-DD').toDate()
    : undefined;
  const maxDateObj = maxDate
    ? moment(maxDate, 'YYYY-MM-DD').toDate()
    : undefined;

  // Filter dates - only enable specific dates if provided
  const filterDate = (date: Date) => {
    if (enabledDates.length === 0) {
      return true; // No restriction if no enabled dates provided
    }
    const dateStr = moment(date).format('YYYY-MM-DD');
    return enabledDatesSet.has(dateStr);
  };

  // Handle date change
  const handleDateChange = async (date: Date | null) => {
    if (!date || disabled) return;

    setSelectedDate(date);
  };

  // Custom header for the datepicker
  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    changeYear,
    changeMonth,
  }: any) => {
    const currentYear = moment(date).year();
    const currentMonth = moment(date).month();

    const years = Array.from({ length: 12 }, (_, i) => currentYear - 5 + i);
    const months = moment.months();

    if (viewMode === 'years') {
      return (
        <div className="custom-header-years">
          <div className="custom-header-years-navigation">
            <button
              type="button"
              onClick={() => {
                const newYears = years.map(y => y - 12);
                changeYear(newYears[5]);
              }}
              disabled={prevMonthButtonDisabled}
              aria-label="Previous year range"
            >
              {'<'}
            </button>
            <span
              role="button"
              tabIndex={0}
              onClick={() => setViewMode('days')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setViewMode('days');
                }
              }}
              aria-label={`Year range ${years[0]}-${
                years[years.length - 1]
              }, click to return to days view`}
              style={{ cursor: 'pointer', outline: 'none' }}
            >
              {years[0]}-{years[years.length - 1]}
            </span>
            <button
              type="button"
              onClick={() => {
                const newYears = years.map(y => y + 12);
                changeYear(newYears[5]);
              }}
              disabled={nextMonthButtonDisabled}
              aria-label="Next year range"
            >
              {'>'}
            </button>
          </div>
          <div className="year-grid">
            {years.map(year => (
              <div
                key={year}
                role="button"
                tabIndex={0}
                className={`year-cell ${
                  year === currentYear ? 'selected' : ''
                }`}
                onClick={() => {
                  changeYear(year);
                  setViewMode('months');
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeYear(year);
                    setViewMode('months');
                  }
                }}
                aria-label={`Select year ${year}${
                  year === currentYear ? ', currently selected' : ''
                }`}
                style={{ outline: 'none' }}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (viewMode === 'months') {
      return (
        <div className="custom-header-months">
          <div className="custom-header-months-navigation">
            <button
              type="button"
              onClick={decreaseYear}
              disabled={prevMonthButtonDisabled}
              aria-label="Previous year"
            >
              {'<'}
            </button>
            <span
              role="button"
              tabIndex={0}
              onClick={() => setViewMode('years')}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setViewMode('years');
                }
              }}
              aria-label={`Year ${currentYear}, click to select year`}
              style={{ cursor: 'pointer', fontWeight: 600, outline: 'none' }}
            >
              {currentYear}
            </span>
            <button
              type="button"
              onClick={increaseYear}
              disabled={nextMonthButtonDisabled}
              aria-label="Next year"
            >
              {'>'}
            </button>
          </div>
          <div className="month-grid">
            {months.map((month, index) => (
              <div
                key={month}
                role="button"
                tabIndex={0}
                className={`month-cell ${
                  index === currentMonth ? 'selected' : ''
                }`}
                onClick={() => {
                  changeMonth(index);
                  setViewMode('days');
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeMonth(index);
                    setViewMode('days');
                  }
                }}
                aria-label={`Select ${month}${
                  index === currentMonth ? ', currently selected' : ''
                }`}
                style={{ outline: 'none' }}
              >
                {month.substring(0, 3)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="custom-header-days">
        <button
          type="button"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          aria-label="Previous month"
        >
          {'<'}
        </button>
        <span
          role="button"
          tabIndex={0}
          onClick={() => setViewMode('months')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setViewMode('months');
            }
          }}
          aria-label={`${moment(date).format(
            'MMMM YYYY'
          )}, click to select month`}
          style={{ cursor: 'pointer', fontWeight: 600, outline: 'none' }}
        >
          {moment(date).format('MMMM YYYY')}
        </span>
        <button
          type="button"
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          aria-label="Next month"
        >
          {'>'}
        </button>
      </div>
    );
  };

  return (
    <CalendarContainer className={className}>
      <CalendarWrapper>
        <DatePicker
          ref={datePickerRef}
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          minDate={minDateObj}
          maxDate={maxDateObj}
          filterDate={filterDate}
          disabled={disabled}
          renderCustomHeader={CustomHeader}
          calendarClassName="provider-appointment-calendar"
        />
      </CalendarWrapper>
    </CalendarContainer>
  );
};

export default Calendar;

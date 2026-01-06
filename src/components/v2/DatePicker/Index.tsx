import React, { useRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../Input/Index';
import useOutsideClick from '../../../hooks/useOutsideClick';
import Flex from '../Flex/Index';
import { formatDateString } from '../../../utils/validating';
import { StyledCalendarInputWrapper, StyledDatePickerWrapper } from './styled';

export const formattedDateValue = (dateValue: string) => {
  if (!dateValue || dateValue === '') {
    return '';
  }

  const [year, month, day] = dateValue.split('-');
  return `${month}/${day}/${year}`;
};

export const formatDateInput = (inputValue: string) => {
  const cleaned = inputValue.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);

  if (!match) return inputValue;

  const part1 = match[1] || '';
  const part2 = match[2] ? `/${match[2]}` : '';
  const part3 = match[3] ? `/${match[3]}` : '';

  return `${part1}${part2}${part3}`;
};

interface Props {
  onChange: (a?: any, any?: any) => any;
  name: string;
  defaultValue?: string;
  errorMessage?: string | React.ReactNode;
  minDate?: string;
  icon?: string;
  placeholder?: string;
  className?: string;
  max?: string;
  onBlur?: () => any;
  disabled?: boolean;
  /** Accessible label for screen readers (e.g., "Date of birth") */
  ariaLabel?: string;
  /** Array of enabled dates in YYYY-MM-DD format. If provided, only these dates will be selectable */
  enabledDates?: string[];
}

const Datepicker = ({
  onChange,
  name,
  defaultValue = '',
  errorMessage,
  minDate,
  icon,
  placeholder = 'mm/dd/yyyy',
  className,
  max,
  onBlur,
  disabled,
  ariaLabel,
  enabledDates = [],
  ...props
}: Props) => {
  const [formattedDate, setFormattedDate] = useState(defaultValue);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    defaultValue && defaultValue !== ''
      ? moment(formatDateString(defaultValue, 'YYYY-MM-DD')).toDate()
      : null
  );
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'days' | 'months' | 'years'>('days');
  const datePickerRef = useRef<DatePicker>(null);
  const visibleDateRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const yearButtonRef = useRef<HTMLSpanElement>(null);

  const minDateObj = minDate
    ? moment(minDate, 'YYYY-MM-DD').toDate()
    : undefined;
  const maxDateObj = max ? moment(max, 'YYYY-MM-DD').toDate() : undefined;

  // Convert enabled dates to a Set for efficient lookup
  const enabledDatesSet = new Set(enabledDates);

  // Filter dates - only enable specific dates if provided
  const filterDate = (date: Date) => {
    if (enabledDates.length === 0) {
      return true; // No restriction if no enabled dates provided
    }
    const dateStr = moment(date).format('YYYY-MM-DD');
    return enabledDatesSet.has(dateStr);
  };

  const handleVisibleInputChange = e => {
    let inputValue = e.target.value;
    inputValue = formatDateInput(inputValue).slice(0, 10);
    setFormattedDate(inputValue);

    const dateValue = formatDateString(inputValue, 'YYYY-MM-DD');
    if (dateValue && !Number.isNaN(Date.parse(dateValue))) {
      const newDate = moment(dateValue, 'YYYY-MM-DD').toDate();
      setSelectedDate(newDate);
      onChange({ target: { value: inputValue } }, name);
    }
  };

  const handleDatePickerChange = (date: Date | null) => {
    if (!date) {
      setFormattedDate('');
      setSelectedDate(null);
      onChange({ target: { value: '' } }, name);
      setIsPickerOpen(false);
      setViewMode('days');
      return;
    }

    setSelectedDate(date);
    const formatted = formattedDateValue(moment(date).format('YYYY-MM-DD'));
    setFormattedDate(formatted);
    onChange({ target: { value: formatted } }, name);
    setIsPickerOpen(false);
    setViewMode('days');
  };

  const openDatePicker = () => {
    if (!disabled && !isPickerOpen) {
      setIsPickerOpen(true);
    }
  };

  const handleClick = () => {
    openDatePicker();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDatePicker();
    }
  };

  const handleBlur = () => {
    onBlur?.();
  };

  const closePicker = () => {
    setIsPickerOpen(false);
    setViewMode('days');
  };

  useOutsideClick({
    ref: wrapperRef,
    callback: closePicker,
    active: isPickerOpen,
    triggerRef: visibleDateRef,
  });

  // Focus the year button when switching to months view for better accessibility
  useEffect(() => {
    if (viewMode === 'months' && yearButtonRef.current) {
      yearButtonRef.current.focus();
    }
  }, [viewMode]);

  // Custom header for the datepicker (same as Calendar component)
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

    // Helper functions to check if a year or month is disabled
    const isYearDisabled = (year: number) => {
      if (minDateObj && year < moment(minDateObj).year()) return true;
      if (maxDateObj && year > moment(maxDateObj).year()) return true;
      return false;
    };

    const isMonthDisabled = (monthIndex: number) => {
      const dateToCheck = moment()
        .year(currentYear)
        .month(monthIndex)
        .startOf('month');

      if (minDateObj) {
        const minMoment = moment(minDateObj).startOf('month');
        if (dateToCheck.isBefore(minMoment)) return true;
      }

      if (maxDateObj) {
        const maxMoment = moment(maxDateObj).startOf('month');
        if (dateToCheck.isAfter(maxMoment)) return true;
      }

      return false;
    };

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
            {years.map(year => {
              const disabled = isYearDisabled(year);
              return (
                <div
                  key={year}
                  role="button"
                  tabIndex={disabled ? -1 : 0}
                  className={`year-cell ${
                    year === currentYear ? 'selected' : ''
                  } ${disabled ? 'disabled' : ''}`}
                  onClick={() => {
                    if (!disabled) {
                      changeYear(year);
                      setViewMode('months');
                    }
                  }}
                  onKeyDown={e => {
                    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      changeYear(year);
                      setViewMode('months');
                    }
                  }}
                  aria-label={`Select year ${year}${
                    year === currentYear ? ', currently selected' : ''
                  }${disabled ? ', disabled' : ''}`}
                  aria-disabled={disabled}
                  style={{ outline: 'none' }}
                >
                  {year}
                </div>
              );
            })}
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
              ref={yearButtonRef}
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
            {months.map((month, index) => {
              const disabled = isMonthDisabled(index);
              return (
                <div
                  key={month}
                  role="button"
                  tabIndex={disabled ? -1 : 0}
                  className={`month-cell ${
                    index === currentMonth ? 'selected' : ''
                  } ${disabled ? 'disabled' : ''}`}
                  onClick={() => {
                    if (!disabled) {
                      changeMonth(index);
                      setViewMode('days');
                    }
                  }}
                  onKeyDown={e => {
                    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      changeMonth(index);
                      setViewMode('days');
                    }
                  }}
                  aria-label={`Select ${month}${
                    index === currentMonth ? ', currently selected' : ''
                  }${disabled ? ', disabled' : ''}`}
                  aria-disabled={disabled}
                  style={{ outline: 'none' }}
                >
                  {month.substring(0, 3)}
                </div>
              );
            })}
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
    <Flex direction="column">
      <StyledCalendarInputWrapper>
        <Input
          ref={visibleDateRef}
          value={formattedDate}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onChange={handleVisibleInputChange}
          onBlur={handleBlur}
          iconLeft={icon}
          placeholder={placeholder}
          maxLength={10}
          disabled={disabled}
          className={`${className} ${errorMessage ? 'input-error' : ''} `}
          errorMessage={errorMessage}
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={isPickerOpen}
          aria-label={
            ariaLabel
              ? `${ariaLabel}, date picker, format month month slash day day slash year year year year`
              : 'Date picker, format month month slash day day slash year year year year'
          }
          autoComplete="off"
          {...props}
        />
        {isPickerOpen && (
          <StyledDatePickerWrapper ref={wrapperRef}>
            <DatePicker
              ref={datePickerRef}
              selected={selectedDate}
              onChange={handleDatePickerChange}
              inline
              minDate={minDateObj}
              maxDate={maxDateObj}
              filterDate={filterDate}
              disabled={disabled}
              renderCustomHeader={CustomHeader}
              calendarClassName="provider-appointment-calendar"
            />
          </StyledDatePickerWrapper>
        )}
      </StyledCalendarInputWrapper>
    </Flex>
  );
};
Datepicker.displayName = 'Datepicker';

export default Datepicker;

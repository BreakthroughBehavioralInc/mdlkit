import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarContainer,
  CalendarWrapper,
  AvailabilityContainer,
  DateDisplayContainer,
  CalendarIcon,
  DateText,
  SlotsContainer,
  TimeSlot,
  NoDateMessage,
  RequestAppointmentButton,
  AvailabilityLabel,
} from './styled';

export interface CalendarProps {
  /** Provider ID */
  providerId: string | number;
  /** Provider type ID */
  providerType: string | number;
  /** Patient ID */
  patientId: string | number;
  /** Current timezone ID */
  timezoneId: string | number;
  /** Timezone name (e.g., 'America/New_York') */
  timezoneName: string;
  /** Initial selected date (YYYY-MM-DD format) */
  initialDate?: string;
  /** Array of enabled dates (YYYY-MM-DD format) */
  enabledDates?: string[];
  /** Minimum selectable date (YYYY-MM-DD format) */
  minDate?: string;
  /** Maximum selectable date (YYYY-MM-DD format) */
  maxDate?: string;
  /** Available time slots for the selected date */
  availableSlots?: Array<{
    phys_availability_id: string | number;
    timeslot: string;
    availability_type: string;
  }>;
  /** Callback when date changes */
  onDateChange?: (date: Date) => void;
  /** Callback when time slot is selected */
  onSlotSelect?: (slot: {
    phys_availability_id: string | number;
    timeslot: string;
    availability_type: string;
  }) => void;
  /** URL for fetching availability data */
  fetchAvailabilityUrl?: string;
  /** Whether calendar is disabled */
  disabled?: boolean;
  /** State abbreviation */
  stateAbbrev?: string;
  /** Availability type */
  availabilityType?: string;
  /** Show "Request Appointment" button */
  showRequestAppointment?: boolean;
  /** Request appointment URL */
  requestAppointmentUrl?: string;
  /** Icon URL for the calendar */
  calendarIconUrl?: string;
  /** Label for "Availability on" text */
  availabilityOnLabel?: string;
  /** Label for "Don't see the time you need?" */
  dontSeeTimeLabel?: string;
  /** Label for "Request an Appointment" button */
  requestAppointmentLabel?: string;
  /** Locale for date formatting (default: 'en') */
  locale?: string;
  /** Custom className for styling */
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  providerId,
  providerType,
  patientId,
  timezoneId,
  timezoneName,
  initialDate,
  enabledDates = [],
  minDate,
  maxDate,
  availableSlots = [],
  onDateChange,
  onSlotSelect,
  fetchAvailabilityUrl,
  disabled = false,
  stateAbbrev,
  availabilityType,
  showRequestAppointment = false,
  requestAppointmentUrl,
  calendarIconUrl,
  availabilityOnLabel = 'Availability on',
  dontSeeTimeLabel = "Don't see the time you need?",
  requestAppointmentLabel = 'Request an Appointment',
  locale = 'en', // Used for future i18n support
  className,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [slots, setSlots] = useState(availableSlots);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'days' | 'months' | 'years'>('days');
  const [tabbableSlotIndex, setTabbableSlotIndex] = useState<number>(0);
  const datePickerRef = useRef<DatePicker>(null);
  const slotRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Initialize selected date
  useEffect(() => {
    if (initialDate) {
      const date = moment(initialDate, 'YYYY-MM-DD').toDate();
      setSelectedDate(date);
    }
  }, [initialDate]);

  // Update slots when availableSlots prop changes
  useEffect(() => {
    setSlots(availableSlots);
  }, [availableSlots]);

  // Initialize refs array when slots change (from prop or state)
  useEffect(() => {
    slotRefs.current = Array(slots.length).fill(null);
    // Reset tabbable slot to first one when slots change
    setTabbableSlotIndex(0);
  }, [slots]);

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

    // Call external callback
    if (onDateChange) {
      onDateChange(date);
    }

    // Fetch availability if URL is provided
    if (fetchAvailabilityUrl) {
      setIsLoading(true);
      try {
        const formattedDate = moment(date).format('YYYY-MM-DD');
        const params = new URLSearchParams({
          provider_id: String(providerId),
          date: formattedDate,
          load_next_day_slots: 'true',
          availability_type: availabilityType || '',
          state_abbrev: stateAbbrev || '',
          us_time_zone_id: String(timezoneId),
          patient_id: String(patientId),
          provider_type: String(providerType),
        });

        const response = await fetch(`${fetchAvailabilityUrl}?${params}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        });

        if (response.ok) {
          // Handle response based on content type
          const contentType = response.headers.get('content-type');
          if (contentType?.includes('application/json')) {
            const data = await response.json();
            if (data.slots) {
              setSlots(data.slots);
            }
          } else {
            // Server might return JavaScript for UJS response
            const text = await response.text();
            // Execute the script if it's JavaScript
            if (contentType?.includes('javascript')) {
              // eslint-disable-next-line no-eval
              eval(text);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching availability:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Handle slot selection
  const handleSlotClick = (slot: typeof availableSlots[0]) => {
    if (onSlotSelect) {
      onSlotSelect(slot);
    }
  };

  // Handle arrow key navigation for time slots
  const handleSlotKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (!arrowKeys.includes(e.key)) {
      // Handle Enter/Space for selection (existing behavior)
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSlotClick(slots[currentIndex]);
      }
      return;
    }

    e.preventDefault();
    let newIndex = currentIndex;
    const slotsPerRow = 3;
    const totalSlots = slots.length;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = (currentIndex + 1) % totalSlots;
        break;
      case 'ArrowLeft':
        newIndex = currentIndex === 0 ? totalSlots - 1 : currentIndex - 1;
        break;
      case 'ArrowDown':
        newIndex = currentIndex + slotsPerRow;
        if (newIndex >= totalSlots) {
          // Wrap to the same column position in the first row
          const column = currentIndex % slotsPerRow;
          newIndex = Math.min(column, totalSlots - 1);
        }
        break;
      case 'ArrowUp':
        newIndex = currentIndex - slotsPerRow;
        if (newIndex < 0) {
          // Wrap to the same column position in the last row
          const column = currentIndex % slotsPerRow;
          const lastRowStart =
            Math.floor((totalSlots - 1) / slotsPerRow) * slotsPerRow;
          newIndex = lastRowStart + column;
          if (newIndex >= totalSlots) {
            newIndex -= slotsPerRow;
          }
        }
        break;
    }

    // Update tabbable slot index and focus the new slot
    setTabbableSlotIndex(newIndex);
    if (slotRefs.current[newIndex]) {
      slotRefs.current[newIndex]?.focus();
    }
  };

  // Format time slot
  const formatTimeSlot = (timeslot: string) => {
    const time = moment.unix(parseInt(timeslot));
    return moment.tz(time, timezoneName).format('h:mm A');
  };

  // Format selected date for display
  const formatDisplayDate = () => {
    if (!selectedDate) return '';
    return moment(selectedDate).format('dddd, MMM DD, YYYY');
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

      {selectedDate && (
        <AvailabilityContainer>
          <AvailabilityLabel>{availabilityOnLabel}</AvailabilityLabel>
          <DateDisplayContainer>
            {calendarIconUrl && (
              <CalendarIcon src={calendarIconUrl} alt="Calendar" />
            )}
            <DateText>{formatDisplayDate()}</DateText>
          </DateDisplayContainer>

          {isLoading ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              Loading...
            </div>
          ) : slots.length > 0 ? (
            <SlotsContainer>
              {slots.map((slot, index) => (
                <TimeSlot
                  key={slot.phys_availability_id}
                  ref={el => {
                    slotRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setTabbableSlotIndex(index);
                    handleSlotClick(slot);
                  }}
                  tabIndex={index === tabbableSlotIndex ? 0 : -1}
                  onKeyDown={e => handleSlotKeyDown(e, index)}
                >
                  {formatTimeSlot(slot.timeslot)}
                </TimeSlot>
              ))}
            </SlotsContainer>
          ) : null}

          {showRequestAppointment && (
            <NoDateMessage>
              <p style={{ fontWeight: 600, marginBottom: '16px' }}>
                {dontSeeTimeLabel}
              </p>
              <RequestAppointmentButton
                href={requestAppointmentUrl || '#'}
                tabIndex={0}
              >
                {requestAppointmentLabel}
              </RequestAppointmentButton>
            </NoDateMessage>
          )}
        </AvailabilityContainer>
      )}
    </CalendarContainer>
  );
};

export default Calendar;

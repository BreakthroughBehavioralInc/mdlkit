import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Datepicker from '../../src/components/v2/DatePicker/Index';

// Calendar icon for the date picker
const CalendarIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDRIMThWMkgxNlY0SDhWMkg2VjRINUMzLjg5IDQgMy4wMSA0Ljg5IDMuMDEgNkwzIDIwQzMgMjEuMSAzLjg5IDIyIDUgMjJIMTlDMjAuMSAyMiAyMSAyMS4xIDIxIDIwVjZDMjEgNC44OSAyMC4xIDQgMTkgNFpNMTkgMjBINVY5SDE5VjIwWk03IDExSDEyVjE2SDdWMTFaIiBmaWxsPSIjNzU3Njc4Ii8+Cjwvc3ZnPgo=';

const meta: Meta<typeof Datepicker> = {
  title: 'v2/DatePicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A DatePicker component that provides a user-friendly date input with formatted display (MM/DD/YYYY) and native date picker integration.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: 'Callback function when date changes',
      action: 'changed',
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for the input field',
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Default date value in MM/DD/YYYY format',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
    minDate: {
      control: { type: 'text' },
      description: 'Minimum selectable date in YYYY-MM-DD format',
    },
    icon: {
      control: { type: 'text' },
      description: 'URL of the icon to display',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names',
    },
    max: {
      control: { type: 'text' },
      description: 'Maximum selectable date in YYYY-MM-DD format',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the date picker is disabled',
    },
    ariaLabel: {
      control: { type: 'text' },
      description:
        'Accessible label for screen readers (e.g., "Date of birth"). The component will append ", date picker, format month month slash day day slash year year year year" to provide full context.',
    },
    enabledDates: {
      control: { type: 'object' },
      description:
        'Array of enabled dates in YYYY-MM-DD format (e.g., ["2026-01-05", "2026-01-10"]). If provided, only these specific dates will be selectable and all other dates will be disabled. Useful for appointment booking or event registration systems.',
    },
  },
  args: {
    name: 'datepicker',
    placeholder: 'mm/dd/yyyy',
    icon: CalendarIcon,
    disabled: false,
  },
  decorators: [
    Story => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
    name: 'birthdate',
  },
};

export const WithAccessibleLabel: Story = {
  args: {
    onChange: () => {},
    name: 'birthdate',
    ariaLabel: 'Date of birth',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `ariaLabel` prop to provide context for screen reader users. VoiceOver will announce: "Date of birth, date picker, format month month slash day day slash year year year year".',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    onChange: () => {},
    name: 'birthdate',
    defaultValue: '10/26/2025',
  },
};

export const WithMinDate: Story = {
  args: {
    onChange: () => {},
    name: 'appointment',
    minDate: '2025-01-01',
    placeholder: 'Select a date from 2025 onwards',
  },
};

export const WithMaxDate: Story = {
  args: {
    onChange: () => {},
    name: 'pastDate',
    max: '2025-12-31',
    placeholder: 'Select a date before 2026',
  },
};

export const WithDateRange: Story = {
  args: {
    onChange: () => {},
    name: 'eventDate',
    minDate: '2025-10-01',
    max: '2025-12-31',
    placeholder: 'Select between Oct-Dec 2025',
  },
};

export const WithSpecificEnabledDates: Story = {
  args: {
    onChange: () => {},
    name: 'appointmentDate',
    enabledDates: [
      '2026-01-05',
      '2026-01-07',
      '2026-01-10',
      '2026-01-12',
      '2026-01-15',
      '2026-01-20',
      '2026-01-22',
      '2026-01-25',
      '2026-01-28',
    ],
    placeholder: 'Only specific dates available',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `enabledDates` prop to specify an array of dates (in YYYY-MM-DD format) that should be selectable. All other dates will be disabled. This is useful for appointment booking systems where only certain dates have availability.',
      },
    },
  },
};

export const WithSpecificWeekdays: Story = {
  render: () => {
    // Generate enabled dates for the next 60 days, only Mondays and Wednesdays
    const generateEnabledDates = () => {
      const dates: string[] = [];
      const today = new Date();

      for (let i = 0; i < 60; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dayOfWeek = date.getDay();

        // Only Mondays (1) and Wednesdays (3)
        if (dayOfWeek === 1 || dayOfWeek === 3) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          dates.push(`${year}-${month}-${day}`);
        }
      }

      return dates;
    };

    const [selectedDate, setSelectedDate] = useState('');
    const enabledDates = generateEnabledDates();

    return (
      <div style={{ width: '400px' }}>
        <p
          style={{
            marginBottom: '16px',
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
          }}
        >
          This example shows only Mondays and Wednesdays for the next 60 days.
        </p>
        <Datepicker
          name="weekdayDate"
          onChange={e => setSelectedDate(e.target.value)}
          placeholder="Select Monday or Wednesday"
          icon={CalendarIcon}
          enabledDates={enabledDates}
          ariaLabel="Available appointment date"
        />
        {selectedDate && (
          <p
            style={{
              marginTop: '12px',
              fontSize: '14px',
              color: '#0066cc',
              fontWeight: 500,
            }}
          >
            Selected: {selectedDate}
          </p>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'This example dynamically generates enabled dates for specific weekdays (Mondays and Wednesdays). This pattern is useful for businesses that only operate on certain days of the week.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    onChange: () => {},
    name: 'birthdate',
    errorMessage: 'Please select a valid date of birth',
  },
};

export const Disabled: Story = {
  args: {
    onChange: () => {},
    name: 'birthdate',
    defaultValue: '10/26/2025',
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    onChange: () => {},
    name: 'startDate',
    placeholder: 'Choose your start date',
  },
};

export const WithoutIcon: Story = {
  args: {
    onChange: () => {},
    name: 'simpleDate',
    icon: undefined,
  },
};

// Interactive example with state management
export const Controlled: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [submittedDate, setSubmittedDate] = useState('');

    const handleChange = (event: any) => {
      setSelectedDate(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmittedDate(selectedDate);
    };

    return (
      <div style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <Datepicker
            name="controlledDate"
            onChange={handleChange}
            placeholder="Select a date"
            icon={CalendarIcon}
          />
          <button
            type="submit"
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              background: '#0379CE',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
        {selectedDate && (
          <p style={{ marginTop: '16px', fontSize: '14px' }}>
            Current value: <strong>{selectedDate}</strong>
          </p>
        )}
        {submittedDate && (
          <p style={{ marginTop: '8px', fontSize: '14px', color: '#28a745' }}>
            Submitted: <strong>{submittedDate}</strong>
          </p>
        )}
      </div>
    );
  },
};

// Form validation example
export const FormValidation: Story = {
  render: () => {
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false);
    const [submittedDate, setSubmittedDate] = useState('');

    const validateDate = (value: string) => {
      if (!value) {
        setError('Date is required');
        return false;
      }

      // Check if date is in the past
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        setError('Please select a future date');
        return false;
      }

      setError('');
      return true;
    };

    const handleChange = (event: any) => {
      const { value } = event.target;
      setDate(value);
      if (touched) {
        validateDate(value);
      }
    };

    const handleBlur = () => {
      setTouched(true);
      validateDate(date);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setTouched(true);
      if (validateDate(date)) {
        setSubmittedDate(date);
      }
    };

    return (
      <div style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <Datepicker
            name="futureDate"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Select a future date"
            icon={CalendarIcon}
            ariaLabel="Appointment date"
            errorMessage={error}
            minDate={new Date().toISOString().split('T')[0]}
          />
          <button
            type="submit"
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              background: '#0379CE',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
        {submittedDate && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#28a745' }}>
            Successfully submitted: <strong>{submittedDate}</strong>
          </p>
        )}
      </div>
    );
  },
};

// Multiple date pickers example
export const MultipleDatePickers: Story = {
  render: () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
      <div
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div>
          <div
            style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
          >
            Start Date
          </div>
          <Datepicker
            name="startDate"
            onChange={e => setStartDate(e.target.value)}
            placeholder="mm/dd/yyyy"
            icon={CalendarIcon}
            ariaLabel="Start date"
            max={
              endDate
                ? new Date(endDate).toISOString().split('T')[0]
                : undefined
            }
          />
        </div>
        <div>
          <div
            style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
          >
            End Date
          </div>
          <Datepicker
            name="endDate"
            onChange={e => setEndDate(e.target.value)}
            placeholder="mm/dd/yyyy"
            icon={CalendarIcon}
            ariaLabel="End date"
            minDate={
              startDate
                ? new Date(startDate).toISOString().split('T')[0]
                : undefined
            }
          />
        </div>
        {startDate && endDate && (
          <p style={{ fontSize: '14px', color: '#333' }}>
            Date range: <strong>{startDate}</strong> to{' '}
            <strong>{endDate}</strong>
          </p>
        )}
      </div>
    );
  },
};

// Responsive layout example
export const ResponsiveLayout: Story = {
  render: () => {
    const [mobileDate, setMobileDate] = useState('');
    const [tabletDate, setTabletDate] = useState('');
    const [desktopDate, setDesktopDate] = useState('');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Mobile View (320px) */}
        <div>
          <h3
            style={{
              marginBottom: '12px',
              fontSize: '18px',
              fontWeight: 600,
              color: '#333',
            }}
          >
            Mobile View (320px)
          </h3>
          <p
            style={{
              marginBottom: '16px',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            Calendar automatically centers and scales to fit small screens
          </p>
          <div style={{ width: '100%', maxWidth: '320px' }}>
            <Datepicker
              name="mobileDate"
              onChange={e => setMobileDate(e.target.value)}
              placeholder="mm/dd/yyyy"
              icon={CalendarIcon}
              ariaLabel="Mobile date picker"
            />
            {mobileDate && (
              <p
                style={{
                  marginTop: '8px',
                  fontSize: '14px',
                  color: '#0066cc',
                  fontWeight: 500,
                }}
              >
                Selected: {mobileDate}
              </p>
            )}
          </div>
        </div>

        {/* Tablet View (768px) */}
        <div>
          <h3
            style={{
              marginBottom: '12px',
              fontSize: '18px',
              fontWeight: 600,
              color: '#333',
            }}
          >
            Tablet View (768px)
          </h3>
          <p
            style={{
              marginBottom: '16px',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            Two-column layout for side-by-side date selection
          </p>
          <div style={{ width: '100%', maxWidth: '768px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Check-in Date
                </label>
                <Datepicker
                  name="tabletDate1"
                  onChange={e => setTabletDate(e.target.value)}
                  placeholder="mm/dd/yyyy"
                  icon={CalendarIcon}
                  ariaLabel="Check-in date"
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Check-out Date
                </label>
                <Datepicker
                  name="tabletDate2"
                  onChange={() => {}}
                  placeholder="mm/dd/yyyy"
                  icon={CalendarIcon}
                  ariaLabel="Check-out date"
                  minDate={
                    tabletDate
                      ? new Date(tabletDate).toISOString().split('T')[0]
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View (1200px) */}
        <div>
          <h3
            style={{
              marginBottom: '12px',
              fontSize: '18px',
              fontWeight: 600,
              color: '#333',
            }}
          >
            Desktop View (1200px)
          </h3>
          <p
            style={{
              marginBottom: '16px',
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.5',
            }}
          >
            Three-column grid layout for complex forms
          </p>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Departure Date
                </label>
                <Datepicker
                  name="desktopDate1"
                  onChange={e => setDesktopDate(e.target.value)}
                  placeholder="mm/dd/yyyy"
                  icon={CalendarIcon}
                  ariaLabel="Departure date"
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Return Date
                </label>
                <Datepicker
                  name="desktopDate2"
                  onChange={() => {}}
                  placeholder="mm/dd/yyyy"
                  icon={CalendarIcon}
                  ariaLabel="Return date"
                  minDate={
                    desktopDate
                      ? new Date(desktopDate).toISOString().split('T')[0]
                      : undefined
                  }
                />
              </div>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 500,
                    fontSize: '14px',
                  }}
                >
                  Booking Deadline
                </label>
                <Datepicker
                  name="desktopDate3"
                  onChange={() => {}}
                  placeholder="mm/dd/yyyy"
                  icon={CalendarIcon}
                  ariaLabel="Booking deadline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates how the DatePicker component adapts to different screen sizes. The calendar popup automatically adjusts its size and position to stay within the viewport. Try opening the calendar on each size to see the responsive behavior.',
      },
    },
  },
};

// Full-width responsive example
export const FullWidthResponsive: Story = {
  render: () => {
    const [date, setDate] = useState('');

    return (
      <div style={{ width: '100%', maxWidth: '100%', padding: '16px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            width: '100%',
          }}
        >
          <div>
            <label
              style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
            >
              Event Date
            </label>
            <Datepicker
              name="eventDate"
              onChange={e => setDate(e.target.value)}
              placeholder="mm/dd/yyyy"
              icon={CalendarIcon}
              ariaLabel="Event date"
            />
          </div>
          <div>
            <label
              style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
            >
              Registration Deadline
            </label>
            <Datepicker
              name="registrationDate"
              onChange={() => {}}
              placeholder="mm/dd/yyyy"
              icon={CalendarIcon}
              ariaLabel="Registration deadline"
              max={
                date ? new Date(date).toISOString().split('T')[0] : undefined
              }
            />
          </div>
          <div>
            <label
              style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}
            >
              Payment Due Date
            </label>
            <Datepicker
              name="paymentDate"
              onChange={() => {}}
              placeholder="mm/dd/yyyy"
              icon={CalendarIcon}
              ariaLabel="Payment due date"
            />
          </div>
        </div>
        {date && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected event date: <strong>{date}</strong>
          </p>
        )}
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'This story shows the DatePicker in a responsive grid layout that automatically adjusts columns based on available space. Try resizing your browser to see how the layout adapts.',
      },
    },
  },
};

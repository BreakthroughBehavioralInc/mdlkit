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

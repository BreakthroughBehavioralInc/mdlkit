import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Calendar from '../../src/components/v2/Calendar/Index';

const meta: Meta<typeof Calendar> = {
  title: 'v2/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    providerId: {
      control: { type: 'text' },
      description: 'Provider ID',
    },
    providerType: {
      control: { type: 'text' },
      description: 'Provider type ID',
    },
    patientId: {
      control: { type: 'text' },
      description: 'Patient ID',
    },
    timezoneId: {
      control: { type: 'text' },
      description: 'Current timezone ID',
    },
    timezoneName: {
      control: { type: 'text' },
      description: 'Timezone name (e.g., America/New_York)',
    },
    initialDate: {
      control: { type: 'text' },
      description: 'Initial selected date (YYYY-MM-DD format)',
    },
    enabledDates: {
      control: { type: 'object' },
      description: 'Array of enabled dates (YYYY-MM-DD format)',
    },
    minDate: {
      control: { type: 'text' },
      description: 'Minimum selectable date (YYYY-MM-DD format)',
    },
    maxDate: {
      control: { type: 'text' },
      description: 'Maximum selectable date (YYYY-MM-DD format)',
    },
    availableSlots: {
      control: { type: 'object' },
      description: 'Available time slots for the selected date',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether calendar is disabled',
    },
    showRequestAppointment: {
      control: { type: 'boolean' },
      description: 'Show "Request Appointment" button',
    },
    availabilityOnLabel: {
      control: { type: 'text' },
      description: 'Label for "Availability on" text',
    },
    dontSeeTimeLabel: {
      control: { type: 'text' },
      description: 'Label for "Don\'t see the time you need?" text',
    },
    requestAppointmentLabel: {
      control: { type: 'text' },
      description: 'Label for "Request an Appointment" button',
    },
    onDateChange: { action: 'date changed' },
    onSlotSelect: { action: 'slot selected' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to get dates for the next 30 days
const getNextDays = (count: number): string[] => {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 0; i < count; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

// Helper function to generate sample time slots
const generateTimeSlots = (count: number = 6) => {
  const slots: Array<{
    phys_availability_id: number;
    timeslot: string;
    availability_type: string;
  }> = [];
  const baseTime = Math.floor(new Date().getTime() / 1000);
  for (let i = 0; i < count; i += 1) {
    slots.push({
      phys_availability_id: i + 1,
      timeslot: String(baseTime + i * 3600),
      availability_type: 'telehealth',
    });
  }
  return slots;
};

export const Default: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(6),
  },
};

export const WithSelectedDate: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(8),
    availabilityOnLabel: 'Available appointments on',
  },
};

export const WithDateRange: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    minDate: new Date().toISOString().split('T')[0],
    maxDate: (() => {
      const date = new Date();
      date.setMonth(date.getMonth() + 2);
      return date.toISOString().split('T')[0];
    })(),
    enabledDates: getNextDays(60),
    availableSlots: generateTimeSlots(10),
  },
};

export const WithManyTimeSlots: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(15),
  },
};

export const WithFewTimeSlots: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(3),
  },
};

export const NoAvailableSlots: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: [],
    showRequestAppointment: true,
    requestAppointmentUrl: '#',
  },
};

export const WithRequestAppointment: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(5),
    showRequestAppointment: true,
    requestAppointmentUrl: '#',
    dontSeeTimeLabel: "Can't find a suitable time?",
    requestAppointmentLabel: 'Request Custom Appointment',
  },
};

export const Disabled: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(6),
    disabled: true,
  },
};

export const LimitedEnabledDates: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    enabledDates: [
      (() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        return date.toISOString().split('T')[0];
      })(),
      (() => {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        return date.toISOString().split('T')[0];
      })(),
      (() => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        return date.toISOString().split('T')[0];
      })(),
      (() => {
        const date = new Date();
        date.setDate(date.getDate() + 10);
        return date.toISOString().split('T')[0];
      })(),
      (() => {
        const date = new Date();
        date.setDate(date.getDate() + 14);
        return date.toISOString().split('T')[0];
      })(),
    ],
    availableSlots: generateTimeSlots(4),
  },
};

export const DifferentTimezone: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '2',
    timezoneName: 'America/Los_Angeles',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(6),
  },
};

export const WithCustomLabels: Story = {
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(8),
    availabilityOnLabel: 'Choose your appointment time for',
    dontSeeTimeLabel: 'Need a different time slot?',
    requestAppointmentLabel: 'Contact us for scheduling',
    showRequestAppointment: true,
    requestAppointmentUrl: '#',
  },
};

// Interactive story with state management
export const Interactive: Story = {
  render: args => {
    const [selectedSlot, setSelectedSlot] = useState<any>(null);

    return (
      <div>
        <Calendar
          {...args}
          onSlotSelect={slot => {
            setSelectedSlot(slot);
            console.log('Selected slot:', slot);
          }}
        />
        {selectedSlot && (
          <div
            style={{
              marginTop: '20px',
              padding: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              maxWidth: '400px',
            }}
          >
            <h3>Selected Slot Info:</h3>
            <p>
              <strong>ID:</strong> {selectedSlot.phys_availability_id}
            </p>
            <p>
              <strong>Timeslot:</strong> {selectedSlot.timeslot}
            </p>
            <p>
              <strong>Type:</strong> {selectedSlot.availability_type}
            </p>
          </div>
        )}
      </div>
    );
  },
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    availableSlots: generateTimeSlots(8),
  },
};

// Story showing dynamic date selection
export const DynamicDateSelection: Story = {
  render: args => {
    const [slots, setSlots] = useState(generateTimeSlots(6));

    return (
      <div>
        <Calendar
          {...args}
          availableSlots={slots}
          onDateChange={date => {
            console.log('Date changed:', date);
            // Simulate different slot counts for different dates
            const dayOfWeek = date.getDay();
            const slotCount = dayOfWeek === 0 || dayOfWeek === 6 ? 3 : 8; // Weekend vs weekday
            setSlots(generateTimeSlots(slotCount));
          }}
        />
        <div
          style={{
            marginTop: '20px',
            padding: '12px',
            background: '#f0f0f0',
            borderRadius: '4px',
            maxWidth: '400px',
          }}
        >
          <p>
            <em>Select different dates to see varying slot availability</em>
          </p>
          <p>Weekdays: 8 slots | Weekends: 3 slots</p>
        </div>
      </div>
    );
  },
  args: {
    providerId: '123',
    providerType: '1',
    patientId: '456',
    timezoneId: '1',
    timezoneName: 'America/New_York',
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
  },
};

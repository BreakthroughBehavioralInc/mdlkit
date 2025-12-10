import React from 'react';
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether calendar is disabled',
    },
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

export const Default: Story = {
  args: {
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
  },
};

export const WithSelectedDate: Story = {
  args: {
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
  },
};

export const WithDateRange: Story = {
  args: {
    minDate: new Date().toISOString().split('T')[0],
    maxDate: (() => {
      const date = new Date();
      date.setMonth(date.getMonth() + 2);
      return date.toISOString().split('T')[0];
    })(),
    enabledDates: getNextDays(60),
  },
};

export const Disabled: Story = {
  args: {
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
    disabled: true,
  },
};

export const LimitedEnabledDates: Story = {
  args: {
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
  },
};

// Interactive story with state management
export const Interactive: Story = {
  render: args => {
    return (
      <div>
        <Calendar {...args} />
      </div>
    );
  },
  args: {
    initialDate: new Date().toISOString().split('T')[0],
    enabledDates: getNextDays(30),
  },
};

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PillGroup } from '../../src/components/v2/Pill/Index';

const meta: Meta<typeof PillGroup> = {
  title: 'v2/Pill',
  component: PillGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of pill options to render',
    },
    value: {
      control: { type: 'text' },
      description: 'Currently selected value (controlled mode)',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback fired when a pill is selected',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the whole pill group',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names',
    },
    style: {
      control: { type: 'object' },
      description: 'Inline styles for the container',
    },
  },
  args: {
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>('');
    return (
      <PillGroup {...args} value={value} onValueChange={v => setValue(v)} />
    );
  },
};

export const Preselected: Story = {
  args: {
    value: 'b',
  },
  render: args => {
    const [value, setValue] = useState<string>('b');
    return (
      <PillGroup {...args} value={value} onValueChange={v => setValue(v)} />
    );
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3' },
      { label: 'Four', value: '4' },
      { label: 'Five', value: '5' },
    ],
  },
  render: args => {
    const [value, setValue] = useState<string>('');
    return (
      <PillGroup {...args} value={value} onValueChange={v => setValue(v)} />
    );
  },
};

export const ControlledExample: Story = {
  render: args => {
    const [value, setValue] = useState<string>('a');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <PillGroup {...args} value={value} onValueChange={v => setValue(v)} />
        <div style={{ color: '#757678', fontFamily: 'Noto Sans, sans-serif' }}>
          Selected value: <strong>{value}</strong>
        </div>
      </div>
    );
  },
};

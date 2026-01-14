import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Chip from '../../src/components/v2/Chip/Index';

// Info Icon Component
const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 7V11M8 5V5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Check Icon Component
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 4L6 11.5L2.5 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star Icon Component
const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1L10.163 5.38197L15 6.12L11.5 9.56L12.326 14.38L8 12.12L3.674 14.38L4.5 9.56L1 6.12L5.837 5.38197L8 1Z"
      fill="currentColor"
    />
  </svg>
);

const meta: Meta<typeof Chip> = {
  title: 'v2/Chip (WIP)',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The text or content displayed in the chip',
    },
    color: {
      control: { type: 'select' },
      options: ['light-blue', 'light-green', undefined],
      description: 'The background color variant of the chip',
    },
    icon: {
      control: false,
      description: 'Optional icon to display before the label',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names',
    },
  },
  args: {
    label: 'Chip Label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Chip label="Default (Gray)" />
      <Chip label="Light Blue" color="light-blue" />
      <Chip label="Light Green" color="light-green" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Chip label="Info" icon={<InfoIcon />} />
      <Chip label="Completed" icon={<CheckIcon />} color="light-green" />
      <Chip label="Featured" icon={<StarIcon />} color="light-blue" />
    </div>
  ),
};

export const LightBlue: Story = {
  args: {
    label: 'Light Blue Chip',
    color: 'light-blue',
  },
};

export const LightGreen: Story = {
  args: {
    label: 'Light Green Chip',
    color: 'light-green',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Chip with Icon',
    icon: <CheckIcon />,
    color: 'light-green',
  },
};

export const LongText: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        flexDirection: 'column',
        maxWidth: '400px',
      }}
    >
      <Chip label="This is a chip with a longer label text" />
      <Chip
        label="Active Status with Extended Information"
        color="light-blue"
        icon={<InfoIcon />}
      />
      <Chip
        label="Completed Task with Success Indicator"
        color="light-green"
        icon={<CheckIcon />}
      />
    </div>
  ),
};

export const MultipleChips: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        maxWidth: '500px',
      }}
    >
      <Chip label="React" color="light-blue" />
      <Chip label="TypeScript" color="light-blue" />
      <Chip label="JavaScript" />
      <Chip label="CSS" />
      <Chip label="HTML" />
      <Chip label="Verified" color="light-green" icon={<CheckIcon />} />
      <Chip label="Popular" color="light-blue" icon={<StarIcon />} />
      <Chip label="New" />
      <Chip label="Updated" color="light-green" />
    </div>
  ),
};

export const StatusChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Chip label="Active" color="light-green" icon={<CheckIcon />} />
      <Chip label="Pending" color="light-blue" icon={<InfoIcon />} />
      <Chip label="Inactive" />
    </div>
  ),
};

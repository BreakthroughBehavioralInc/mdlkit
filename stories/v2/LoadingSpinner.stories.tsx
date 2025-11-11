import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '../../src/components/v2/LoadingSpinner/Index';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'v2/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable loading spinner component with various size, color, and animation options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: 'The color of the spinner',
    },
    size: {
      control: { type: 'range', min: 16, max: 200, step: 4 },
      description: 'The size of the spinner in pixels',
    },
    speed: {
      control: 'text',
      description: 'Animation speed (CSS duration value)',
    },
    startPosition: {
      control: 'select',
      options: ['topRight', 'topLeft'],
      description: 'Starting position of the spinner animation',
    },
    direction: {
      control: 'select',
      options: ['cw', 'ccw'],
      description:
        'Direction of the spinner animation (clockwise or counter-clockwise)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {},
};

// Different sizes
export const Small: Story = {
  args: {
    size: 32,
  },
};

export const Medium: Story = {
  args: {
    size: 72,
  },
};

export const Large: Story = {
  args: {
    size: 120,
  },
};

// Different colors
export const CustomColor: Story = {
  args: {
    color: '#ff6b6b',
  },
};

export const GreenSpinner: Story = {
  args: {
    color: '#51cf66',
  },
};

export const PurpleSpinner: Story = {
  args: {
    color: '#9775fa',
  },
};

// Different speeds
export const FastSpinner: Story = {
  args: {
    speed: '0.8s',
  },
};

export const SlowSpinner: Story = {
  args: {
    speed: '4s',
  },
};

// Different directions
export const CounterClockwise: Story = {
  args: {
    direction: 'ccw',
  },
};

export const Clockwise: Story = {
  args: {
    direction: 'cw',
  },
};

// Different start positions
export const StartTopLeft: Story = {
  args: {
    startPosition: 'topLeft',
  },
};

export const StartTopRight: Story = {
  args: {
    startPosition: 'topRight',
  },
};

// Complex combinations
export const CustomConfiguration: Story = {
  args: {
    color: '#fd7e14',
    size: 96,
    speed: '1.5s',
    direction: 'ccw',
    startPosition: 'topLeft',
  },
};

export const MinimalSpinner: Story = {
  args: {
    color: '#868e96',
    size: 24,
    speed: '1s',
  },
};

// Multiple spinners showcase
export const MultipleSpinners: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <LoadingSpinner size={32} color="#ff6b6b" />
      <LoadingSpinner size={48} color="#51cf66" />
      <LoadingSpinner size={64} color="#339af0" />
      <LoadingSpinner size={80} color="#9775fa" />
    </div>
  ),
};

// Loading states example
export const LoadingStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <LoadingSpinner size={24} />
        <span>Loading data...</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <LoadingSpinner size={32} color="#51cf66" />
        <span>Processing request...</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <LoadingSpinner size={40} color="#fd7e14" />
        <span>Uploading files...</span>
      </div>
    </div>
  ),
};

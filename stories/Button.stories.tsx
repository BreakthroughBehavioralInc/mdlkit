import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    raised: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
  args: {
    size: 'large',
    raised: 2,
    disabled: false,
    fullWidth: false,
    type: 'submit',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button onClick={() => {}} size="small" m="sm">
        Small Button
      </Button>
      <Button onClick={() => {}} size="medium" m="sm">
        Medium Button
      </Button>
      <Button onClick={() => {}} size="large" m="sm">
        Large Button
      </Button>
    </>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Full-Width Button',
    fullWidth: true,
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
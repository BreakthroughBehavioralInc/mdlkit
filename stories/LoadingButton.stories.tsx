import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoadingButton from '../src/components/LoadingButton';

const meta: Meta<typeof LoadingButton> = {
  title: 'LoadingButton',
  component: LoadingButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    raised: {
      control: { type: 'select' },
      options: [1, 2, 3],
    },
    onClick: { action: 'clicked' },
  },
  args: {
    isLoading: false,
    disabled: false,
    fullWidth: false,
    size: 'large',
    raised: 2,
    type: 'submit',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'LoadingButton',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    isLoading: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <LoadingButton
        onClick={action('Small button clicked')}
        size="small"
        m="sm"
      >
        Small Button
      </LoadingButton>
      <LoadingButton
        onClick={action('Medium button clicked')}
        size="medium"
        m="sm"
      >
        Medium Button
      </LoadingButton>
      <LoadingButton
        onClick={action('Large button clicked')}
        size="large"
        m="sm"
      >
        Large Button
      </LoadingButton>
    </>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Full-Width Button',
    fullWidth: true,
    size: 'large',
    onClick: action('Full-Width button clicked'),
  },
};

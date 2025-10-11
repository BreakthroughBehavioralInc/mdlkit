import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OutlineButton from '../src/components/OutlineButton';

const meta: Meta<typeof OutlineButton> = {
  title: 'OutlineButton',
  component: OutlineButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
  args: {
    fullWidth: false,
    size: 'large',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Outline Button',
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <OutlineButton
        onClick={action('Small outline button clicked')}
        size="small"
        m="sm"
      >
        Small Outline Button
      </OutlineButton>
      <OutlineButton
        onClick={action('Medium outline button clicked')}
        size="medium"
        m="sm"
      >
        Medium Outline Button
      </OutlineButton>
      <OutlineButton
        onClick={action('Large outline button clicked')}
        size="large"
        m="sm"
      >
        Large Outline Button
      </OutlineButton>
    </>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Full-Width Outline Button',
    fullWidth: true,
    size: 'large',
    onClick: action('Full-Width button clicked'),
  },
};

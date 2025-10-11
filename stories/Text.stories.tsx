import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    small: {
      control: { type: 'boolean' },
    },
  },
  args: {
    small: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is some sample text.',
  },
};

export const Small: Story = {
  args: {
    children: 'This is small text.',
    small: true,
  },
};

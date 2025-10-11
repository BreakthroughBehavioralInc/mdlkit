import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Box from '../src/components/Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is text in the Box component.',
  },
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Flex from '../src/components/Flex';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Flex is an extension of Box with "display:flex" and props for flexbox',
  },
};

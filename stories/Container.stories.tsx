import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Container from '../src/components/Container';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Set max width of a container',
  },
};

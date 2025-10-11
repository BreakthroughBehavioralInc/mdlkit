import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Hyperlink from '../src/components/Hyperlink';

const meta: Meta<typeof Hyperlink> = {
  title: 'Hyperlink',
  component: Hyperlink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bold: {
      control: { type: 'boolean' },
    },
    small: {
      control: { type: 'boolean' },
    },
  },
  args: {
    href: '#',
    bold: true,
    small: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    bold: true,
    small: false,
    children: 'Link here',
  },
};

export const Small: Story = {
  args: {
    href: '#',
    bold: false,
    small: true,
    children: 'Small link',
  },
};

export const Bold: Story = {
  args: {
    href: '#',
    bold: true,
    small: false,
    children: 'Bold link',
  },
};

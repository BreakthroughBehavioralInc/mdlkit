import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    id: 'myCheckbox',
    checked: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'myCheckbox',
    checked: true,
    disabled: false,
  },
};

export const Unchecked: Story = {
  args: {
    id: 'myCheckbox2',
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    id: 'myCheckbox3',
    checked: true,
    disabled: true,
  },
};

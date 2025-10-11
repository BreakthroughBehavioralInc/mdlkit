import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioField from '../src/components/forms/RadioField';

const meta: Meta<typeof RadioField> = {
  title: 'RadioField',
  component: RadioField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    id: 'myRadioField',
    label: 'Label test',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'myRadioField',
    label: 'Label test',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    id: 'myRadioField2',
    label: 'Disabled Radio Field',
    disabled: true,
  },
};

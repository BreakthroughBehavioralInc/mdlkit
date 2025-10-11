import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Icon from '../src/components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'checkActive',
        'checkEmpty',
        'chevronDown',
        'chevronUp',
        'information',
        'search',
      ],
    },
    size: {
      control: { type: 'number' },
    },
  },
  args: {
    name: 'chevronDown',
    size: 24,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'chevronDown',
    size: 24,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icon name="checkActive" size={24} />
      <Icon name="checkEmpty" size={24} />
      <Icon name="chevronDown" size={24} />
      <Icon name="chevronUp" size={24} />
      <Icon name="information" size={24} />
      <Icon name="search" size={24} />
    </div>
  ),
};

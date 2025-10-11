import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Container } from '../src';
import Select from '../src/components/Select';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container maxWidth={200} pt="sm">
      <Select id="sample" name="sample">
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
      </Select>
    </Container>
  ),
};

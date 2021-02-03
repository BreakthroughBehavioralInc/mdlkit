import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Container } from '../src';
import Select from '../src/components/Select';

export default {
  title: 'Select',
  component: Select,
};

export const Knobs = () => (
  <Container maxWidth={200} pt="sm">
    <Select id="sample" name="sample">
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
    </Select>
  </Container>
);

Knobs.story = {
  decorators: [withKnobs],
};

import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Knobs = () => (
  <Checkbox
    id="myCheckbox"
    checked={boolean('checked', true)}
    disabled={boolean('disabled', false)}
  />
);

Knobs.story = {
  decorators: [withKnobs],
};
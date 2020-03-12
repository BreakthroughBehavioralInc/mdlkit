import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CheckboxField from './CheckboxField';

export default {
  title: 'CheckboxField',
  component: CheckboxField,
};

export const Knobs = () => (
  <CheckboxField
    id="myCheckboxField"
    meta={boolean('meta', true)}
    label="test label"
    disabled={boolean('disabled', false)}
    input=""
  />
);

Knobs.story = {
  decorators: [withKnobs],
};

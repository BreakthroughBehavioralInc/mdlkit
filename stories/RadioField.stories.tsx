import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import RadioField from '../src/components/forms/RadioField';

export default {
  title: 'RadioField',
  component: RadioField,
};

export const RadioFieldStory = () => (
  <RadioField
    id="myRadioField"
    label="Label test"
    disabled={boolean('disabled', false)}
  />
);

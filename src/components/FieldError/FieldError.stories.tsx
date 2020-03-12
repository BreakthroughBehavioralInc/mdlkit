import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import FieldError from './FieldError';

export default {
  title: 'FieldError',
  component: FieldError,
};

export const Knobs = () => (
  <FieldError color="red" lineHeight="display" label="test">
    {' '}
    test{' '}
  </FieldError>
);

Knobs.story = {
  decorators: [withKnobs],
};

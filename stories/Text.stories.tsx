import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Text from '../src/components/Text';

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs],
};

export const Knobs = () => (
  <Text small={boolean('small', false)}>This is some sample text.</Text>
);

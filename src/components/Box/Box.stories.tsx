import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Box from './Box';

export default {
  title: 'Box',
  component: Box,
};

export const Knobs = () => <Box>Box</Box>;

Knobs.story = {
  decorators: [withKnobs],
};

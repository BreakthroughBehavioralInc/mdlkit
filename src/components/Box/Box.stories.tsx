import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Box from './Box';

export default {
  title: 'Box',
  component: Box,
};

export const Knobs = () => <Box>Box</Box>;

Knobs.story = {
  decorators: [withKnobs],
};

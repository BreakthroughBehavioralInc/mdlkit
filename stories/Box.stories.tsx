import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Box from '../src/components/Box';

export default {
  title: 'Box',
  component: Box,
  decorators: [withKnobs],
};

export const DefaultBox = () => <Box>This is text in the Box component.</Box>;

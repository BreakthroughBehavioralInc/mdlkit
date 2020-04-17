import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Flex from '../src/components/Flex';

export default {
  title: 'Flex',
  component: Flex,
};

export const Knobs = () => (
  <Flex>
    Flex is an extension of Box with &quot;display:flex&quot; and props for
    flexbox
  </Flex>
);

Knobs.story = {
  decorators: [withKnobs],
};

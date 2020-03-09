import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Container from './Container';

export default {
  title: 'Container',
  component: Container,
};

export const Knobs = () => <Container>Set max width of a container</Container>;

Knobs.story = {
  decorators: [withKnobs],
};

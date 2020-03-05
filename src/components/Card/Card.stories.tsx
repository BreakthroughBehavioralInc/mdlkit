import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Knobs = () => <Card>Card</Card>;

Knobs.story = {
  decorators: [withKnobs],
};

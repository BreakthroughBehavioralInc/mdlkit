import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Knobs = () => (
  <Button
    fullWidth={boolean('fullWidth', false)}
    size={select('Size', ['small', 'medium', 'large'], 'large')}
  >
    Button
  </Button>
);

export const Sizes = () => (
  <>
    <Button onClick={action('Small button clicked')} size="small" m="sm">
      Small Button
    </Button>
    <Button onClick={action('Medium button clicked')} size="medium" m="sm">
      Medium Button
    </Button>
    <Button onClick={action('Large button clicked')} size="large" m="sm">
      Large Button
    </Button>
  </>
);

export const FullWidth = () => (
  <Button onClick={action('Full-Width button clicked')} fullWidth size="large">
    Full-Width Button
  </Button>
);

Knobs.story = {
  decorators: [withKnobs],
};

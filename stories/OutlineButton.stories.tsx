import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import OutlineButton from '../src/components/OutlineButton';

export default {
  title: 'OutlineButton',
  component: OutlineButton,
};

export const Knobs = () => (
  <OutlineButton
    fullWidth={boolean('fullWidth', false)}
    size={select('Size', ['small', 'medium', 'large'], 'large')}
  >
    Outline Button
  </OutlineButton>
);

export const Sizes = () => (
  <>
    <OutlineButton
      onClick={action('Small outline button clicked')}
      size="small"
      m="sm"
    >
      Small Outline Button
    </OutlineButton>
    <OutlineButton
      onClick={action('Medium outliine button clicked')}
      size="medium"
      m="sm"
    >
      Medium Outline Button
    </OutlineButton>
    <OutlineButton
      onClick={action('Large outline button clicked')}
      size="large"
      m="sm"
    >
      Large Outline Button
    </OutlineButton>
  </>
);

export const FullWidth = () => (
  <OutlineButton
    onClick={action('Full-Width button clicked')}
    fullWidth
    size="large"
  >
    Full-Width Outline Button
  </OutlineButton>
);

Knobs.story = {
  decorators: [withKnobs],
};

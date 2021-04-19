import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import LoadingButton from '../src/components/LoadingButton';

export default {
  title: 'LoadingButton',
  component: LoadingButton,
};

export const Knobs = () => (
  <LoadingButton
    isLoading={boolean('loading', false)}
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', false)}
    size={select('size', ['small', 'medium', 'large'], 'large')}
    raised={select('raised', [1, 2, 3], 2)}
    type="submit"
  >
    LoadingButton
  </LoadingButton>
);

export const Sizes = () => (
  <>
    <LoadingButton onClick={action('Small button clicked')} size="small" m="sm">
      Small Button
    </LoadingButton>
    <LoadingButton
      onClick={action('Medium button clicked')}
      size="medium"
      m="sm"
    >
      Medium Button
    </LoadingButton>
    <LoadingButton onClick={action('Large button clicked')} size="large" m="sm">
      Large Button
    </LoadingButton>
  </>
);

export const FullWidth = () => (
  <LoadingButton
    onClick={action('Full-Width button clicked')}
    fullWidth
    size="large"
  >
    Full-Width Button
  </LoadingButton>
);

Knobs.story = {
  decorators: [withKnobs],
};

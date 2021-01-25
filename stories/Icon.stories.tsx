import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import Icon from '../src/components/Icon';

export default {
  title: 'Icon',
  component: Icon,
};

export const Knobs = () => (
  <div>
    <Icon
      name={select(
        'name',
        [
          'checkActive',
          'checkEmpty',
          'chevronDown',
          'chevronUp',
          'information',
          'search',
        ],
        'chevronDown'
      )}
      size={number('size', 24)}
    />
  </div>
);

Knobs.story = {
  decorators: [withKnobs],
};

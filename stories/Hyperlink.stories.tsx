import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Hyperlink from '../src/components/Hyperlink';

export default {
  title: 'Hyperlink',
  component: Hyperlink,
  decorators: [withKnobs],
};

export const Knobs = () => (
  <Hyperlink
    href="#"
    bold={boolean('bold', true)}
    small={boolean('small', false)}
  >
    Link here
  </Hyperlink>
);

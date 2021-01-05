import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Hyperlink from '../src/components/Hyperlink';

export default {
  title: 'Hyperlink',
  component: Hyperlink,
  decorators: [withKnobs],
};

export const DefaultHyperlink = () => <Hyperlink href="#">Link here</Hyperlink>;

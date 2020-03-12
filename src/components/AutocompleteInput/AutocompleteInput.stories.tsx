import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import AutocompleteInput from './AutocompleteInput';

export default {
  title: 'AutocompleteInput',
  component: AutocompleteInput,
};

export const Knobs = () => (
  <AutocompleteInput
    id="myAutocompleteInput"
    input=""
    meta="some data"
    icon
    label="test"
    placeholder
    items
    onInputValueChange
    onSelect
  />
);

Knobs.story = {
  decorators: [withKnobs],
};

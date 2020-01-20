import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box';
import theme from '../theme';

describe('Box', () => {
  test('renders', () => {
    const json = renderer.create(<Box theme={theme} />).toJSON();
    expect(json).toMatchSnapshot();
  });
});

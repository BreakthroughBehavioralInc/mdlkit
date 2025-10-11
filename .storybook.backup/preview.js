import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import GlobalStyle from '../src/shared/GlobalStyle';
import theme from '../src/theme';
import Box from '../src/components/Box';

addDecorator(withA11y);
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Box p="md">
      <GlobalStyle />
      {story()}
    </Box>
  </ThemeProvider>
));

// automatically import all files ending in *.stories.ts
configure(require.context('../src/components', true, /\.stories\.ts$/), module);

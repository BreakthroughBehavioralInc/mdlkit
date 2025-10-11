import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withA11y } from '@storybook/addon-a11y';
import GlobalStyle from '../src/shared/GlobalStyle';
import theme from '../src/theme';
import Box from '../src/components/Box';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withA11y,
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box p="md">
          <GlobalStyle />
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
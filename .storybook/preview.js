import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/shared/GlobalStyle';
import theme from '../src/theme';
import Box from '../src/components/Box';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    Story => (
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
    a11y: {
      // Minimal configuration - let it use defaults
    },
  },
};

export default preview;

import path from 'path';
import { fileURLToPath } from 'url';

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        '../tsconfig.json'
      ),
      propFilter: prop => {
        if (prop.parent == null) {
          return true;
        }
        // Filter out props which type definition is placed in react package
        return prop.parent.fileName.indexOf('node_modules/@types/react') < 0;
      },
    },
  },
  webpackFinal: async config => {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

export default config;

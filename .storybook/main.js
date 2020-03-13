const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, './../tsconfig.json'),
            propFilter: prop => {
              if (prop.parent == null) {
                return true;
              }

              // Filter out props which type definition is placed in react package
              return (
                prop.parent.fileName.indexOf('node_modules/@types/react') < 0
              );
            },
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

const path = require('path');

const config = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials',  '@storybook/addon-styling',
  {
    name: 'storybook-addon-next',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  }],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs

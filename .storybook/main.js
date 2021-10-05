/**
 * 파일 경로 불러옴 
 */
 const path = require('path');

 module.exports = {
   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
   addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss', '@storybook/addon-postcss'],
  //  webpackFinal: async (config, { configType }) => {
  //    config.resolve.alias = {
  //      ...config.resolve.alias,
  //      '@': path.resolve(__dirname, '../packages'),
  //    };
 
  //    return config;
  //  },
 };
 
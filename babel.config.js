const { plugins } = require('./.eslintrc');

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: ["@babel/plugin-transform-modules-commonjs"]
}
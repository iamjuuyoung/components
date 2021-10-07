module.exports = {
  presets: ['@babel/preset-env', ['@vue/app', {
    polyfills: [
      'es.promise',
      'es.symbol'
    ]
  }]],
  plugins: ["@babel/plugin-transform-modules-commonjs"]
}
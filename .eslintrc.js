// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'html', 'standard'],
  // add your custom rules here
  rules: {
    extends: 'standard',
    // disable check semicolon 기본(Default) : [2, "never"]
    semi: 0, //not checking
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    // 불필요한 삼항연산 경고
    'no-unneeded-ternary': 0,
    // 불필요한 call() method 경고
    'no-useless-call': 0,
    'no-trailing-spaces': 0, // set it to 1 to get a warning.
    // 'max-len':['error', { code: 120 }]
  }
};

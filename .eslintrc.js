module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quote-props': [2, 'consistent-as-needed', { keywords: true }],
    'no-useless-escape': 0,
    'new-cap': [2, {
      newIsCap: false,
      capIsNew: false,
    }],
  },
};

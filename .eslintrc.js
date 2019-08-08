// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:vue/recommended' /*, '@vue/airbnb' */],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['warn', { code: 120 }],
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    camelcase: 'warn',
    'no-underscore-dangle': 'warn',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'vue/attributes-order': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
};

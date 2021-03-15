module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'no-console': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/jsx-pascal-case': 1,
    'import/prefer-default-export': 1,
    'react/no-array-index-key': 1,
    'arrow-spacing': [1, { before: true, after: true }],
    'no-unused-vars': 2,
    'no-shadow': 1,
    camelcase: 1,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25
      }
    ]
  }
};

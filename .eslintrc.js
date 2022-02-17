module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports',
  ],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
   'react/jsx-filename-extension': [
     'error',
     {
       extensions: ['.jsx', '.tsx'],
     }
   ],
   'react/react-in-jsx-scope': 'off',
   'no-use-before-define': 'off',
   '@typescript-eslint/no-use-before-define': ['error'],
   'react/jsx-one-expression-per-line': 'off',
  },
};

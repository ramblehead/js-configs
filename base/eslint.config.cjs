// Hey Emacs, this is -*- coding: utf-8 -*-

// https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/2

// Inspired by the following resources:
// https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
// https://github.com/flycheck/flycheck/issues/514
// https://github.com/cerner/eslint-config-terra

// To consider:
// https://www.npmjs.com/package/@liquid-labs/catalyst-scripts

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
  },
  rules: {
    // /b/; JavaScript
    // /b/{

    // Let tide (or tsc) and js2-mode handle undefined variables
    'no-undef': 'off',

    'generator-star-spacing': ['error', 'before'],

    'max-len': [
      'error',
      88,
      {
        ignoreUrls: true,
        ignorePattern: '^(?:import|export)\\s.+\\sfrom\\s.+;$',
      },
    ],

    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],

    curly: ['warn', 'all'],

    // 'arrow-body-style': ['warn', 'as-needed'],
    'arrow-body-style': 'off',

    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allow: ['__typename'],
      },
    ],

    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    // 'keyword-spacing': ['error', {
    //   overrides: {
    //     catch: { after: false },
    //     for: { after: false },
    //     if: { after: false },
    //     switch: { after: false },
    //     while: { after: false },
    //   },
    // }],

    'no-param-reassign': ['error', { props: false }],

    quotes: ['error', 'single', { avoidEscape: true }],

    'import/prefer-default-export': 'off',

    'max-classes-per-file': 'off',

    'implicit-arrow-linebreak': 'off',

    'no-console': 'off',

    // 'object-curly-newline': [
    //   'error',
    //   {
    //     minProperties: 10,
    //     consistent: true,
    //   },
    // ],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          // minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          // minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          // minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          // minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        cjs: 'always',
        mjs: 'always',
        jsx: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
        },
      },
    ],

    // /b/}

    // /b/; @typescript-eslint
    // /b/{

    indent: 'off',
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        flatTernaryExpressions: true,
        SwitchCase: 1,
        // see https://github.com/typescript-eslint/typescript-eslint/issues/455
        // and https://github.com/typescript-eslint/typescript-eslint/issues/1824
        ignoredNodes: [
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
      },
    ],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error'],

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    '@typescript-eslint/explicit-function-return-type': ['error'],

    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
      },
    ],

    '@typescript-eslint/ban-types': [
      'error',
      {
        // types: { '{}': false },
        extendDefaults: true,
      },
    ],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    '@typescript-eslint/consistent-type-imports': ['error'],

    // 'dot-notation': 'off',
    // '@typescript-eslint/dot-notation': ['error'],

    'no-spaced-func': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    // see https://typescript-eslint.io/rules/func-call-spacing/
    // and https://eslint.style/packages/js
    'func-call-spacing': 'off',

    // /b/}
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.jsx'],
      rules: { '@typescript-eslint/explicit-function-return-type': 'off' },
    },
    {
      files: ['*.cjs'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.cjs', '.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
};

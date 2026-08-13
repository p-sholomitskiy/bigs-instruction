import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';
import vue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/'],
  },

  // Базовые JS-правила
  eslint.configs.recommended,

  // Vue
  ...vue.configs['flat/strongly-recommended'],

  // ==========================================
  // Vue + TypeScript
  // ==========================================

  {
    files: ['**/*.vue'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: ['.vue'],
      },
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      'import-x': importX,
    },

    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      '@typescript-eslint/no-non-null-assertion': 'error',

      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      '@typescript-eslint/no-unnecessary-condition': 'warn',

      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],

      // Vue
      'vue/multi-word-component-names': 'off',

      'vue/no-unused-vars': 'error',

      'vue/no-mutating-props': 'error',

      'vue/no-v-html': 'warn',

      'vue/require-explicit-emits': 'error',

      'vue/require-prop-types': 'error',

      // Imports
      'import-x/no-duplicates': 'error',

      'import-x/no-unresolved': 'error',

      'no-duplicate-imports': 'error',

      // JavaScript
      'no-console': 'warn',

      'no-debugger': 'error',

      eqeqeq: ['error', 'always'],

      curly: ['error', 'all'],

      'no-var': 'error',

      'prefer-const': 'error',

      'no-unreachable': 'error',

      // Formatting
      '@stylistic/no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false,
        },
      ],

      '@stylistic/key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      '@stylistic/indent': ['error', 2],


      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: 'always',
        },
      ],

      '@stylistic/semi': ['error', 'always'],

      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],

      '@stylistic/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],

      '@stylistic/array-bracket-spacing': [
        'error',
        'never',
      ],

      '@stylistic/keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      '@stylistic/space-before-blocks': [
        'error',
        'always',
      ],

      '@stylistic/space-infix-ops': 'error',

      '@stylistic/arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
    },
  },

  // ==========================================
  // TypeScript
  // ==========================================

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      ...tseslint.configs.strictTypeChecked,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parserOptions: {
        projectService: true,
      },
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      'import-x': importX,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      '@typescript-eslint/no-non-null-assertion': 'error',

      '@typescript-eslint/no-unnecessary-type-assertion': 'error',

      '@typescript-eslint/no-unnecessary-condition': 'warn',

      '@typescript-eslint/no-unsafe-argument': 'off',

      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],

      'import-x/no-duplicates': 'error',

      'import-x/no-unresolved': 'error',

      'no-duplicate-imports': 'error',

      'no-console': 'warn',

      'no-debugger': 'error',

      eqeqeq: ['error', 'always'],

      curly: ['error', 'all'],

      'no-var': 'error',

      'prefer-const': 'error',

      'no-unreachable': 'error',

      // Formatting
      '@stylistic/no-mixed-operators': 'error',

      '@stylistic/no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false,
        },
      ],

      '@stylistic/indent': ['error', 2],

      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: 'always',
        },
      ],

      '@stylistic/semi': ['error', 'always'],

      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],

      '@stylistic/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],

      '@stylistic/array-bracket-spacing': [
        'error',
        'never',
      ],

      '@stylistic/keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      '@stylistic/space-before-blocks': [
        'error',
        'always',
      ],

      '@stylistic/space-infix-ops': 'error',

      '@stylistic/arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
    },
  },
);
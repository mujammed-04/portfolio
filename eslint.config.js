import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    plugins: {
      prettier: pluginPrettier,
    },
    extends: ['plugin:prettier/recommended', prettier],
    rules: {
      'no-unused-vars': 'error',
      'prettier/prettier': 'error',
      semi: 'error',
      'prefer-const': 'error',
    },
  },
]);

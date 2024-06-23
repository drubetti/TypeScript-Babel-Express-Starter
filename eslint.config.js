import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default [
  ...tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
  ),
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['.env', 'dist/*', 'lib/*', 'tsconfig.tsbuildinfo'],
  },
];

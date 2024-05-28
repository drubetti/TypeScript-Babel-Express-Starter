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
    ignores: ['.env', '/dist/*', '/lib/*', 'tsconfig.tsbuildinfo'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

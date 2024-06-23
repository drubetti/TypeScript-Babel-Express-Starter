/* eslint-disable @typescript-eslint/no-require-imports */
const eslint = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');
const tsEslint = require('typescript-eslint');

module.exports = [
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

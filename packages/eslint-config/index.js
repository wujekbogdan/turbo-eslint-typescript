/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  extends: [
    "turbo",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:prettier/recommended",
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project:[
      './tsconfig.eslint.json',
      './tsconfig.json',
    ],
  },
};

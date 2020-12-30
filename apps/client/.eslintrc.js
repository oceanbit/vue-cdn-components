module.exports = {
  extends: [
    '../../.eslintrc.json',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['!**/*'],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};

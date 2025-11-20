module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vitest/globals': true, // 👈 recognizes test(), expect(), etc.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'vitest'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
}

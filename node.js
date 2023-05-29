// @ts-check
/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  extends: [
    "./base",
    "plugin:node/recommended",
  ],
  env: {
    browser: false,
    node: true,
  },
  plugins: [
    "node",
  ],
};

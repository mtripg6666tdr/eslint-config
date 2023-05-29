// @ts-check
/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  extends: [
    "./typescript",
    "plugin:node/recommended",
  ],
  env: {
    browser: false,
    node: true,
  },
  plugins: [
    "node",
  ],
  rules: {
    "node/no-path-concat": "warn",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-missing-import": "off",
    "node/no-missing-require": "off",
  },
};

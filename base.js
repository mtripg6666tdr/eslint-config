// @ts-check
/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    "eslint:recommended",
  ],
  rules: Object.assign(
    {},
    require("./presets/base-enabled-rules"),
    require("./presets/base-enabled-rules"),
    require("./presets/plain-javascript-rules"),
  ),
  overrides: [
    {
      files: [
        "test/**/*.test.js",
        "tests/**/*.test.js",
      ],
      env: {
        mocha: true,
      },
    },
    {
      files: [
        "__tests__/**/*.js",
      ],
      env: {
        jest: true,
      },
    },
  ],
};

// @ts-check
const typeScriptRules = require("./typescript").rules;

/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "named-import-spacing",
    "unused-imports",
    "deprecation",
    "eslint-comments",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: Object.assign(
    {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "eslint-comments/no-unused-disable": "error",
    },
    typeScriptRules
  ),
};

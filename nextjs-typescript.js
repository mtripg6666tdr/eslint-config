// @ts-check
const typeScriptRules = require("./typescript").rules;

/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "named-import-spacing",
    "unused-imports",
    "deprecation",
  ],
  rules: Object.assign({
    "@next/next/no-img-element": "off",
  }, typeScriptRules),
};

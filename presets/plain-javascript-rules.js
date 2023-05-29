// @ts-check
/* eslint sort-keys: ["error"] */
/** @type {import("eslint-define-config").Rules} */
module.exports = {
  "comma-dangle": [
    "warn",
    {
      "arrays": "always-multiline",
      "exports": "never",
      "functions": "only-multiline",
      "imports": "never",
      "objects": "always-multiline",
    },
  ],
  "comma-spacing": "warn",
  "default-param-last": "error",
  "indent": [
    "warn",
    2,
    {
      "SwitchCase": 1,
      "ignoredNodes": [
        "PropertyDefinition[decorators]",
      ],
    },
  ],
  "init-declarations": "warn",
  "no-array-constructor": "error",
  "no-dupe-class-members": "error",
  "no-extra-parens": [
    "warn",
    "all",
    {
      "nestedBinaryExpressions": false,
    },
  ],
  "no-extra-semi": "error",
  "no-implied-eval": "error",
  "no-invalid-this": "warn",
  "no-loop-func": "warn",
  "no-loss-of-precision": "error",
  "no-return-await": "warn",
  "no-shadow": "error",
  "no-throw-literal": "warn",
  "no-unused-expressions": [
    "warn",
    {
      "allowShortCircuit": true,
      "enforceForJSX": true,
    },
  ],
  "no-useless-constructor": "warn",
  "quotes": [
    "error",
    "double",
  ],
  "semi": [
    "error",
    "always",
  ],
};

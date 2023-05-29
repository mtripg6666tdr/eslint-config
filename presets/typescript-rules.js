// @ts-check
/* eslint sort-keys: ["error"] */
/** @type {import("eslint-define-config").Rules} */
module.exports = {
  "@typescript-eslint/array-type": [
    "error",
    {
      "default": "array",
    },
  ],
  "@typescript-eslint/await-thenable": "warn",
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/comma-dangle": [
    "warn",
    {
      "arrays": "always-multiline",
      "exports": "never",
      "functions": "only-multiline",
      "imports": "never",
      "objects": "always-multiline",
    },
  ],
  "@typescript-eslint/comma-spacing": "warn",
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    {
      "prefer": "type-imports",
    },
  ],
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/indent": [
    "warn",
    2,
    {
      "SwitchCase": 1,
      "ignoredNodes": [
        "PropertyDefinition[decorators]",
        "TSUnionType",
      ],
    },
  ],
  "@typescript-eslint/init-declarations": "warn",
  "@typescript-eslint/lines-between-class-members": "off",
  "@typescript-eslint/member-delimiter-style": [
    "error",
    {
      "multiline": {
        "delimiter": "comma",
        "requireLast": true,
      },
      "overrides": {
        "interface": {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true,
          },
        },
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false,
      },
    },
  ],
  "@typescript-eslint/method-signature-style": [
    "error",
    "property",
  ],
  "@typescript-eslint/no-array-constructor": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "warn",
  "@typescript-eslint/no-confusing-void-expression": "off",
  "@typescript-eslint/no-dupe-class-members": "error",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-empty-interface": [
    "error",
    {
      "allowSingleExtends": false,
    },
  ],
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-extra-parens": [
    "warn",
    "all",
    {
      "nestedBinaryExpressions": false,
    },
  ],
  "@typescript-eslint/no-extra-semi": "error",
  "@typescript-eslint/no-floating-promises": "warn",
  "@typescript-eslint/no-implied-eval": "error",
  "@typescript-eslint/no-inferrable-types": [
    "error",
    {
      "ignoreParameters": true,
      "ignoreProperties": true,
    },
  ],
  "@typescript-eslint/no-invalid-this": "warn",
  "@typescript-eslint/no-loop-func": "warn",
  "@typescript-eslint/no-loss-of-precision": "error",
  "@typescript-eslint/no-meaningless-void-operator": [
    "error",
    {
      "checkNever": false,
    },
  ],
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-throw-literal": "warn",
  "@typescript-eslint/no-unnecessary-type-assertion": "warn",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unused-expressions": [
    "warn",
    {
      "allowShortCircuit": true,
      "enforceForJSX": true,
    },
  ],
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/no-useless-constructor": "warn",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/object-curly-spacing": [
    "warn",
    "always",
  ],
  "@typescript-eslint/prefer-as-const": "warn",
  "@typescript-eslint/prefer-enum-initializers": "warn",
  "@typescript-eslint/prefer-for-of": "off",
  "@typescript-eslint/prefer-includes": "warn",
  "@typescript-eslint/prefer-readonly": [
    "warn",
    {
      "onlyInlineLambdas": false,
    },
  ],
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",
  "@typescript-eslint/quotes": [
    "error",
    "double",
  ],
  "@typescript-eslint/require-await": "off",
  "@typescript-eslint/return-await": [
    "warn",
    "in-try-catch",
  ],
  "@typescript-eslint/semi": [
    "error",
    "always",
  ],
  "@typescript-eslint/type-annotation-spacing": "warn",
};

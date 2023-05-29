// @ts-check
/* eslint sort-keys: ["error"] */
/** @type {import("eslint-define-config").Rules} */
module.exports = {
  "comma-style": "error",
  "dot-location": [
    "warn",
    "property",
  ],
  "eol-last": [
    "error",
    "always",
  ],
  "eqeqeq": "error",
  "func-call-spacing": "warn",
  "key-spacing": "error",
  "keyword-spacing": [
    "warn",
    {
      "after": false,
      "before": true,
      "overrides": {
        "case": {
          "after": true,
        },
        "const": {
          "after": true,
        },
        "do": {
          "after": false,
        },
        "else": {
          "before": false,
        },
        "export": {
          "after": true,
        },
        "from": {
          "after": true,
        },
        "import": {
          "after": true,
          "before": false,
        },
        "let": {
          "after": true,
        },
        "return": {
          "after": true,
        },
        "throw": {
          "after": true,
        },
      },
    },
  ],
  "max-nested-callbacks": [
    "warn",
    {
      "max": 4,
    },
  ],
  "max-statements-per-line": [
    "error",
  ],
  "new-cap": [
    "warn",
    {
      "capIsNew": false,
    },
  ],
  "newline-per-chained-call": "warn",
  "no-floating-decimal": "error",
  "no-label-var": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "warn",
  "no-mixed-requires": "error",
  "no-multi-spaces": "error",
  "no-multiple-empty-lines": [
    "warn",
    {
      "max": 2,
      "maxBOF": 0,
      "maxEOF": 1,
    },
  ],
  "no-new-func": "error",
  "no-new-object": "error",
  "no-new-require": "error",
  "no-new-wrappers": "error",
  "no-octal-escape": "error",
  "no-promise-executor-return": "warn",
  "no-self-compare": "warn",
  "no-sequences": "warn",
  "no-trailing-spaces": [
    "warn",
    {
      "ignoreComments": true,
      "skipBlankLines": true,
    },
  ],
  "no-undef-init": "warn",
  "no-unexpected-multiline": "warn",
  "no-unmodified-loop-condition": "error",
  "no-unneeded-ternary": "error",
  "no-unreachable": "warn",
  "no-useless-call": "warn",
  "no-useless-computed-key": "warn",
  "no-useless-concat": "warn",
  "no-useless-escape": "warn",
  "no-useless-return": "warn",
  "no-var": "error",
  "no-void": "error",
  "no-whitespace-before-property": "warn",
  "nonblock-statement-body-position": "warn",
  "operator-assignment": "warn",
  "operator-linebreak": [
    "warn",
    "before",
  ],
  "padded-blocks": [
    "warn",
    "never",
  ],
  "prefer-arrow-callback": "warn",
  "prefer-const": "warn",
  "prefer-numeric-literals": "warn",
  "prefer-rest-params": "warn",
  "prefer-spread": "warn",
  "rest-spread-spacing": "warn",
  "semi-spacing": "error",
  "space-before-blocks": [
    "warn",
    {
      "classes": "off",
      "functions": "off",
      "keywords": "never",
    },
  ],
  "space-before-function-paren": [
    "warn",
    {
      "anonymous": "never",
      "asyncArrow": "always",
      "named": "never",
    },
  ],
  "space-in-parens": "warn",
  "space-infix-ops": "warn",
  "space-unary-ops": "warn",
  "template-curly-spacing": "warn",
  "template-tag-spacing": "warn",
  "unicode-bom": "warn",
  "wrap-iife": "error",
  "yield-star-spacing": "error",
};

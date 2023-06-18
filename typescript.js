// @ts-check
/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  extends: [
    "./base.js",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "named-import-spacing",
    "unused-imports",
    "deprecation",
  ],
  rules: Object.assign(
    {},
    require("./presets/typescript-overwrite-rules"),
    require("./presets/typescript-rules"),
    {
      // other plugins
      "import/order": [1, {
        "groups": [
          "type",
          "builtin",
          "external",
          [
            "parent",
            "sibling",
            "index",
          ],
          "object",
        ],
        "pathGroups": [
        ],
        "pathGroupsExcludedImportTypes": ["builtin", "type"],
        "alphabetize": {
          "order": "asc",
        },
        "newlines-between": "always",
      }],
      "named-import-spacing/named-import-spacing": "warn",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_",
        },
      ],
      "deprecation/deprecation": "warn",
    },
  ),
  overrides: [
    {
      files: [
        "test/**/*.test.ts",
        "tests/**/.test.ts",
      ],
      env: {
        mocha: true,
      },
    },
    {
      files: [
        "__tests__/**/*.ts",
      ],
      env: {
        jest: true,
      },
    },
  ],
};

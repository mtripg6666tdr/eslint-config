// @ts-check
/** @type {import("eslint-define-config").ESLintConfig} */
module.exports = {
  extends: [
    "./browser-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    "import/no-anonymous-default-export": "warn",
    "react/no-unknown-property": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};

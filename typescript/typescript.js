module.exports = {
  ...require("../shared/base"),
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unicorn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
  },
};

const { rules } = require("../shared/prettier");

module.exports = {
  plugins: ["@typescript-eslint", "unicorn", "prettier"],
  extends: ["prettier", "prettier/@typescript-eslint", "prettier/unicorn"],
  rules: {
    ...rules,
  },
};

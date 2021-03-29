module.exports = {
  ...require("../shared/prettier"),
  plugins: ["@typescript-eslint", "unicorn", "prettier"],
  extends: ["prettier", "prettier/@typescript-eslint", "prettier/unicorn"],
};

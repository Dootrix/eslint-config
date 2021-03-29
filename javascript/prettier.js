module.exports = {
  ...require("../shared/prettier"),
  plugins: ["prettier", "unicorn"],
  extends: ["prettier", "prettier/unicorn"],
};

const { rules } = require("../shared/prettier");

module.exports = {
  plugins: ["prettier"],
  extends: ["prettier", "prettier/unicorn"],
  rules: {
    ...rules,
  },
};

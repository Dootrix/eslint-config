const { rules } = require("../shared/prettier");
module.exports = {
  plugins: ["prettier", "unicorn"],
  extends: ["prettier", "prettier/unicorn"],
  rules: {
    ...rules,
  },
};

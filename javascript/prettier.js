const { rules } = require("../shared/prettier");

module.exports = {
  plugins: ["prettier"],
  extends: ["prettier"],
  rules: {
    ...rules,
  },
};

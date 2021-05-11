const { rules } = require("../shared/base");

module.exports = {
  env: {
    es6: true,
  },
  plugins: ["unicorn"],
  extends: ["eslint:recommended", "plugin:unicorn/recommended"],
  rules: {
    ...rules,
  },
};

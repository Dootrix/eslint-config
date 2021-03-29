module.exports = {
  ...require("../shared/base"),
  env: {
    es6: true,
  },
  plugins: ["unicorn"],
  extends: ["eslint:recommended", "plugin:unicorn/recommended"],
};

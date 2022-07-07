module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["./javascript", "./javascript/prettier"],
  rules: {
    "unicorn/prefer-module": "off",
  },
};

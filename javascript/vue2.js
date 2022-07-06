const { rules } = require("../shared/base");

module.exports = {
  extends: ["plugin:vue/recommended"],
  rules: {
    ...rules,
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
  },
};

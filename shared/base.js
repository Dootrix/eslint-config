module.exports = {
  rules: {
    "no-console": ["warn", { allow: ["info", "warn", "error", "debug", "table"] }],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          kebabCase: true, // kabab-case (not kebab-Case or Kekbab-Case)
          pascalCase: true, // PascalCase (not pascalCase)
        },
      },
    ],
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        replacements: {
          props: false,
          env: false,
        },
      },
    ],
  },
};

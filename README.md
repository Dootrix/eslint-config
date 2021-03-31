# @dootrix/eslint-config

Sharable config for [ESlint][eslint]

## Installation

Install this config then run [install-peerdeps][ipeerdeps] to get dependencies
as development dependencies.

```
npm install https://github.com/Dootrix/eslint-config -D
npx install-peerdeps @dootrix/eslint-config --dev
```

Or pick the depenecies you need based on use case. (You may not need them all
espcially if not working with TypeScript).

Then in the .eslintrc.js file (or what ever you may call it)

```js
module.exports = {
  root: true,
  env: {
    node: true,
    amd: true,
  },
  extends: ["@dootrix/eslint-config/javascript", "@dootrix/eslint-config/javascript/prettier"],
};
```

Changing the values as you need to...

## Extending

Options for setups are as follows. Note that `prettier` configs should always be
the last item to include (if you want it).

### JavaScript

```
@dootrix/eslint-config/javascript
@dootrix/eslint-config/javascript/prettier
```

### TypeScript

```
@dootrix/eslint-config/typescript
@dootrix/eslint-config/typescript/react
@dootrix/eslint-config/typescript/prettier
```

## VSCode User?

Make sure you have [ESLint extention][eslintvscode] installed and add the
following into the project's settings file (`/.vscode/settings.json`) (deleting
as appropriate).

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.format.enable": false,
  "editor.formatOnSave": true
}
```

[eslint]: https://eslint.org/
[eslintptions]: https://eslint.org/docs/user-guide/configuring/
[eslintvscode]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[ipeerdeps]: https://www.npmjs.com/package/install-peerdeps

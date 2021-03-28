# nvim-types

Types of neovim api generated semi-automatically.

You can write your [neovim](https://github.com/neovim/neovim) settings with typescript using [TypeScriptToLua](https://typescripttolua.github.io).

- **This project is in early development stage and work in progress. Some apis may be missing.**
- **Most of api have arguments name info but types info don't.**

## Install

1. Install this package

```
yarn add -D nvim-types
# or
npm install -D nvim-types
```

2. Modify your tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["nvim-types/0.5.0-nightly"]
  }
}
```

This software includes the work that is distributed in the Apache License 2.0.

# nvim-types [WIP]

Auto-generate typescript types from neovim document project.

You can write your [neovim](https://github.com/neovim/neovim) settings with typescript using [TypeScriptToLua](https://typescripttolua.github.io).

**This project is in early development stage. Some apis is not available.**

## Install

1. Install this package

```
yarn add -D lua-types
# or
npm install -D lua-types
```

2. Modify your tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["nvim-types"]
  }
}
```

This software includes the work that is distributed in the Apache License 2.0.

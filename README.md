# eslint-config-kay

<!-- [![npm version](https://badge.fury.io/js/eslint-config-kay.svg)](https://badge.fury.io/js/eslint-config-kay) -->

- 支持 TypeScript、Vue
- 规范化代码并自动修复

## 使用

### 安装

```bash
pnpm add -D eslint eslint-config-kay
```

### 配置 `.eslintrc`

```json
{
  "extends": "kay"
}
```

### 在 package.json 中添加 script (可选)

示例:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 配置 VS Code 自动修复

安装 [VS Code ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 并创建 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### 依赖找不到的解决方案

```ts
// 1. pnpm add @rushstack/eslint-patch
// 2. 在 .eslintrc.js 引入以下代码
require('@rushstack/eslint-patch/modern-module-resolution')
```
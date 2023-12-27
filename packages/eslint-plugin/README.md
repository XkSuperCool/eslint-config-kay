## Rules

### no-template-curly-in-string-fix
给 [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string) 规则添加 Fix 功能

```ts
// before
const text = 'text${document.title}'

// after
const text = `text${document.title}`
```

### vue-jsx-interpolation-spacing
校验 Vue 中 JSX 插值表达式两端是否存在间隔, 并自动修复

```tsx
// before
const render = <div>{a}</div>

// after
const render = <div>{ a }</div>
```
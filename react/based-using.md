# 基础使用

## 文档

+ [React]

+ [React 中文]

## [JSX]

## [井字棋游戏]

## 列表 & Key

```js
<ul>
  {data.map((x) =>
    <li key={x.id}>{x.value}</li>
  )}
</ul>
```

## 数据更新

### 基本更新

```js
const { value } = this.state

this.setDate({ value })
// 确保在数据更新后执行一些操作
this.setDate({ value }, () => {})
```

### 数据的解构更新

> 更新数据后没有立即触发视图，适用于数组项与对象属性。

```js
const { arr, obj } = this.state

this.setDate({ arr: [...arr] })

this.setDate({ obj: {...obj} })
```

### 主动更新

> forceUpdate 告诉 React 需要再次运行 render()。这将会导致 render() 方法在相应的组件上被调用，并且子级组件也会调用自己的 render()。通常情况下尽量避免使用，在 render() 中仅从 props 和 state 中读取数据，这会使应用简化并且高效。

```js
this.forceUpdate()
```

## 版本差异化

### React v16+

[React v16.0]

[React]: https://reactjs.org/

[React 中文]: https://react.docschina.org/

[JSX]: https://react.docschina.org/docs/introducing-jsx.html

[井字棋游戏]: https://react.docschina.org/tutorial/tutorial.html

[React v16.0]: https://reactjs.org/blog/2017/09/26/react-v16.0.html

# 生命周期

## 基本

+ componentWillMount 在渲染前调用，在客户端也在服务端

+ componentDidMount 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的 DOM 结构，可以通过 ```this.getDOMNode()``` 来进行访问。如果你想和其它 JavaScript 框架一起使用，可以在这个方法中调用 setTimeout, setInterval 或者发送 AJAX 请求等操作(防止异步操作阻塞 UI)

+ componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化 render 时不会被调用

+ shouldComponentUpdate 返回一个布尔值，默认返回 ture，返回false时不会重写 render。在组件接收到新的 props 或者 state 时被调用。在初始化时或者使用 forceUpdate 时不被调用，可以在你确认不需要更新组件时使用

+ componentWillUpdate 在组件接收到新的 props 或者 state 但还没有 render 时被调用。在初始化时不会被调用

+ componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用

+ componentWillUnmount在组件从 DOM 中移除之前立刻被调用

## 用例

```js
class LifeCycle extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
    }
  }

  handleChange = () => {
    const { value } = this.state
    this.setState({ value: value + 1 })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <button onClick={this.handleChange}>INCREMENT</button>
        <Content value={value}></Content>
      </div>
    )
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log('Component WILL MOUNT')
  }
  componentDidMount() {
    console.log('Component DID MOUNT')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS')
  }
  shouldComponentUpdate(newProps, newState) {
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT')
  }

  render() {
    const { value } = this.props
    return (
      <div>{value}</div>
    )
  }
}

ReactDOM.render(<LifeCycle />, document.getElementById('root'))
```

## shouldComponentUpdate

> 只有经过测量，使用 shouldComponentUpdate 后组件的渲染速度确实有可察觉的提升，你才应该用它。

## [React v16.3.0：更新异步渲染(新的生命周期)]

### 不再建议使用的生命周期

+ componentWillMount

+ componentWillReceiveProps

+ componentWillUpdate

### 新生命周期

+ getDerivedStateFromProps

+ getSnapshotBeforeUpdate

## [React.Component] 与 [React.PureComponent]

```js
// React.Component
import React from 'react'
class App extends Component {}
```

```js
// React.PureComponent
import React, { PureComponent } from 'react'

class App extends PureComponent {}
```

[React v16.3.0：更新异步渲染(新的生命周期)]: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

[React.PureComponent]: https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent

[React.Component]: https://zh-hans.reactjs.org/docs/react-component.html

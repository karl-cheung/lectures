# 组件通信

## 父组件传递数据至子组件

```js
import React from 'react'

class Parent extends React.Component {
  state = { value: '父组件传递数据至子组件' }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <input onChange={this.handleChange} />
        <Child value={value} />
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    const { value } = this.props
    return (
      <div>{value}</div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
```

## 子组件传递数据至父组件

```js
import React from 'react'

class Parent extends React.Component {
  state = { value: '子组件传递数据至父组件' }

  changeValue = value => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Child changeValue={this.changeValue} />
        <div>{value}</div>
      </div>
    )
  }
}

class Child extends React.Component {
  handleChange = (e) => {
    const { changeValue } = this.props
    const { value } = e.target
    changeValue(value)
  }

  render() {
    return (
      <input onChange={this.handleChange} />
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
```

## Container 传递

```js
import React from 'react'

class Container extends React.Component {
  state = { value: '公共 Container 传递' }

  changeValue = (value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <SiblingA changeValue={this.changeValue} />
        <SiblingB value={value} />
      </div>
    )
  }
}

class SiblingA extends React.Component {
  handleChange = (e) => {
    const { changeValue } = this.props
    const { value } = e.target
    changeValue(value)
  }

  render() {
    return (
      <input onChange={this.handleChange} />
    )
  }
}

class SiblingB extends React.Component {
  render() {
    const { value } = this.props
    return (
      <div>{value}</div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'))
```

## Context 传递

+ Context 生产者消费者模式

+ 生产者 Provider，需要通过一个静态属性 childContextTypes 声明提供给消费者 Consumer 的 Context 对象属性，并实现一个实例 getChildContext 方法，返回一个代表 Context 的纯对象 (plain object)

+ Consumer 通过一个静态属性 contextTypes 声明后，访问 Provider 中的 Context 对象的属性

```js
import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component {
  state = { value: 'Context 传递' }

  static childContextTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func,
  }

  getChildContext() {
    const { value } = this.state
    return {
      value,
      changeValue: this.changeValue,
    }
  }

  changeValue = (value) => {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <ConsumerA />
        <ConsumerB />
      </div>
    )
  }
}

class ConsumerA extends React.Component {
  static contextTypes = {
    changeValue: PropTypes.func,
  }

  handleChange = (e) => {
    const { changeValue } = this.context
    const { value } = e.target
    changeValue(value)
  }

  render() {
    return (
      <input onChange={this.handleChange} />
    )
  }
}

class ConsumerB extends React.Component {
  static contextTypes = {
    value: PropTypes.string,
  }

  render() {
    const { value } = this.context
    return (
      <div>{value}</div>
    )
  }
}

ReactDOM.render(<Provider />, document.getElementById('root'))
```

## Context 传递 v16.3.0

+ Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

+ Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据

+ 使用 context, 我们可以避免通过中间元素传递 props

+ Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差

+ [使用 Context 之前的考虑]

+ [React v16.3.0：上下文API]

```js
import React from 'react'

const ContextInstance = React.createContext()

const Provider = (value) => {
  return (
    <ContextInstance.Provider>
      <Consumer>{value}</Consumer>
    </ContextInstance.Provider>
  )
}

class Container extends React.Component {
  state = { value: 'Context 传递 v16.3.0' }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <input onChange={this.handleChange} />
        {Provider(value)}
      </div>
    )
  }
}

class Consumer extends React.Component {
  render() {
    return (
      <ContextInstance.Consumer>
        {(ctx) => (
          <div>
            {this.props.children}
          </div>
        )}
      </ContextInstance.Consumer>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'))
```

## 发布订阅传递

```js
import React from 'react'
import PubSub from 'pubsub-js'

class Container extends React.Component {
  render() {
    return (
      <div>
        <Emitter />
        <Listener />
      </div>
    )
  }
}

class Emitter extends React.Component {
  handleChange = (e) => {
    const { value } = e.target
    PubSub.publish('changeValue', value)
  }

  render() {
    return (
      <input onChange={this.handleChange} />
    )
  }
}

class Listener extends React.Component {
  state = { value: '发布订阅传递' }

  componentDidMount() {
    this.changeValue = PubSub.subscribe('changeValue', (name, value) => {
      this.setState({ value })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.changeValue)
  }

  render() {
    const { value } = this.state
    return (
      <div>{value}</div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('root'))
```

[使用 Context 之前的考虑]: https://zh-hans.reactjs.org/docs/context.html#before-you-use-context

[React v16.3.0：上下文API]: https://reactjs.org/blog/2018/03/29/react-v-16-3.html#official-context-api

import React from 'react'

class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '子组件传递数据至父组件',
    }
  }

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


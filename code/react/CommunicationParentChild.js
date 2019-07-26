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


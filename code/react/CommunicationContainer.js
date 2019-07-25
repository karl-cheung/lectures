import React from 'react'

class Container extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '公共 Container 传递',
    }
  }

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


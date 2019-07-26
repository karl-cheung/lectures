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

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

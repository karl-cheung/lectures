import React from 'react'

class LifeCycle extends React.Component {
  state = { value: 0 }

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
    // return nextState.data !== this.state.data
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

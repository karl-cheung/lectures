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

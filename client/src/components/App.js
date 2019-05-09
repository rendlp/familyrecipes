import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Hello World</h1>
        <h2>Adam's scrambled eggs</h2>

      </Provider>
    )
  }
}

export default App

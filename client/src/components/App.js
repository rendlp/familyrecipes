import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>i am cool</h1>
        

      </Provider>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './auth/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
         <Login />
        
       </Router>
      </Provider>
    )
  }
}

export default App

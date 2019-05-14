import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Upload from './Upload'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <div>
              {/* public routes */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />

              {/* private routes */}
              <AuthRoute path="/" exact component={Home} />
              <AuthRoute path="/upload" component={Upload} />
            </div>
          </Router>
        </Provider>
      </AuthProvider>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import CreateGroup from "./CreateGroup"
import AccountHome from './accountHome'
import FormContainer from '../components/Upload'
import Landing from './landing'


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <div>
              {/* public routes */}
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/upload" component={FormContainer} />

                <Route exact path="/home" component={Landing} />
                <Route path="/:account" component={AccountHome} />
              </Switch>



              {/* private routes */}
              <AuthRoute path="/" exact component={Home} />
              <AuthRoute path="/creategroup" exact component={CreateGroup} />
            </div>
          </Router>
        </Provider>
      </AuthProvider>
    )
  }
}

export default App

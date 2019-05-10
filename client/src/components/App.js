import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router } from 'react-router-dom'
import Upload from '../components/Upload'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
       
         <Upload />
       </Router>
      </Provider>
    )
  }
}

export default App

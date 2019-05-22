import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import GroupList from './GroupList'

class UserGroups extends Component {
  render() {
    return (
      <div>
        <Header />
        
          <GroupList />
        <Footer />
      </div>
    )
  }
}
export default UserGroups

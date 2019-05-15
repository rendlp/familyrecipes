import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import LogoutButton from '../logout-button'
import GroupList from '../GroupList'

class UserGroups extends Component {
  render() {
    return (
      <div>
        <Header />
        <LogoutButton />
          <GroupList />
        <Footer />
      </div>
    )
  }
}
export default UserGroups

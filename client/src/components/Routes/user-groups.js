import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import GroupList from './GroupList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

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

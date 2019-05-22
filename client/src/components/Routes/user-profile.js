import React, { Component } from 'react'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to='/'><button className='backBtn'>Back</button></Link>
      
          <p>This page should render a user's profile</p>
          <Logout />
        <Footer />
      </div>
    )
  }
}
export default UserProfile

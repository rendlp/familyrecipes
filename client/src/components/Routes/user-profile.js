import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"
import { getUserInfo } from '../../actions/actions'
import {AuthContext} from '../../lib/auth'

const UserProfile = props => {

  const { user } = useContext(AuthContext)

    useEffect(() => {
      getUserInfo(user)
    },[])

  const userInfo = useSelector(appstate => appstate.userInfo)
  
  console.log(userInfo)
    return (
      <div>
        <Header />
        <Link to='/'><button className='backBtn'>Back</button></Link>
        <div className="userProfileDisplay">
          <img className="user-pic" src={userInfo.userPicURL} alt='' />
          <p>username:</p>
          <p>{user}</p>
          <p>First Name:</p>
          <p>{userInfo.firstname}</p>
          <p>Last Name:</p>
          <p>{userInfo.lastname}</p>
        </div>
        <Link to='/user_profile/edit'><button className='backBtn'>Edit Profile</button></Link>

          <Logout />
        <Footer />
      </div>
    )
}

export default UserProfile

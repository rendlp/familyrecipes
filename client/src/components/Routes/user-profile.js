import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import Footer from '../footer'
import  { Link } from 'react-router-dom'
import Logout from "../auth/Logout"
import { getUserInfo } from '../../actions/actions'
import {AuthContext} from '../../lib/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
        <div id="canvas-small">
          <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
          <div className="userProfileDisplay">
            <img className="user-pic" src={userInfo.userPicURL} alt='' />
            <p>Username: {user}</p>
            <p>First Name: {userInfo.firstname}</p>
            <p>Last Name: {userInfo.lastname}</p>
          </div>
          <div id="edit-profile"><Link to='/user_profile/edit'><button id="edit-profile">Edit Profile</button></Link></div>
        </div>
        <Footer />
      </div>
    )
}

export default UserProfile

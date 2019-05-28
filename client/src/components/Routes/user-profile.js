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
      console.log(userInfo)
    },[])

  const userInfo = useSelector(appstate => appstate.userInfo)

  console.log(userInfo)

    return (
      <div className='profileContainer'>
        <Header />
        <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>

        <div className="userProfileDisplay">
        <div className='profileHeader'>
         <img className="user-pic" src={userInfo.userPicURL} alt='' />
         <Link to='/user_profile/edit'><button className='abutton'>Edit Profile</button></Link>
        </div>

         <div className='profileInformation'>
          <h3>Username:</h3>
          <p>{user}</p>
          <h3>First Name:</h3>
          <p>{userInfo.firstname}</p>
          <h3>Last Name:</h3>
          <p>{userInfo.lastname}</p>
         </div>

        </div>

        <div className='invisible' />
        <Footer />
      </div>
    )
}

export default UserProfile

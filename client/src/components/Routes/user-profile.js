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
      <div className='profileContainer'>
        <Header />
        <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
        
        <div className="userProfileDisplay">
         <img className="user-pic" src={userInfo.userPicURL} alt='' />
         <div className='profileInformation'>
          <p>Username:</p>
          <p>{user}</p>
          <p>First Name:</p>
          <p>{userInfo.firstname}</p>
          <p>Last Name:</p>
          <p>{userInfo.lastname}</p>
          <Link to='/user_profile/edit'><button className='abutton'>Edit Profile</button></Link>
          </div>

        </div>
        <div className='invisible' />
      
        <Footer />
      </div>
    )
}

export default UserProfile
